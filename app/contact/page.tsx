import ContactForm from "../_components/ContactForm";

export default function Contact() {
  return (
    <div className="px-2 pb-10 mx-auto container flex flex-col items-center ">
      <div className="my-10   w-full">
        <h1 className="text-2xl md:text-3xl brightness ">Contact Me</h1>
        <p className="text-base md:text-lg">Let&apos;s talk about your ideas, projects or anything else</p>
      </div>

      <ContactForm />
    </div>
  );
}
