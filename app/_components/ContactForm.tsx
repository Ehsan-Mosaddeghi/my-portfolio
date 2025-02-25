"use client";
import { BlurFade } from "@/components/ui/blur-fade";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "Hi! I wanna contact you...",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Please enter your name";
    if (!formData.email) newErrors.email = "Please enter your email";
    if (!formData.message) newErrors.message = "Please enter a message";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("");

      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message.");
    }
  };

  return (
    <BlurFade delay={0.25} duration={0.6} direction="up" className="w-full max-w-[40rem] ">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3 ">
        <label htmlFor="name">
          Your Name <span className="danger">*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Ehsan Mosaddeghi"
          value={formData.name}
          onChange={handleChange}
          className={`p-2 border border-border rounded ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && <p className="danger text-sm">{errors.name}</p>}

        <label htmlFor="email">
          Your Email <span className="danger">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="ehsan@gmail.com"
          value={formData.email}
          onChange={handleChange}
          className={`p-2 border border-border rounded ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && <p className="danger text-sm">{errors.email}</p>}

        <label htmlFor="name">
          Message <span className="danger">*</span>
        </label>
        <textarea
          name="message"
          placeholder="Hi! I wanna contact you..."
          defaultValue={formData.message}
          onChange={handleChange}
          className={`p-2 border border-border rounded ${errors.message ? "border-red-500" : ""}`}
        ></textarea>
        {errors.message && <p className="danger text-sm">{errors.message}</p>}

        <button
          type="submit"
          className="p-2  bg-gradient-to-r from-[#5489c5] via-[#080b23] to-[#5489c5] text-white rounded animate-shiny-text hover:shadow-lg  duration-300 "
        >
          Send
        </button>
        <p>{status}</p>
      </form>
    </BlurFade>
  );
}
