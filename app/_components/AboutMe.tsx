"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Contact from "./Contact";
import Skills from "./Skills";
import Location from "./Location";
import Summary from "./Summary";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold my-10">About me</h2>
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-4 gap-5"
      >
        <Location />
        <Contact />
        <Summary />
        <Skills />
      </motion.div>
    </div>
  );
};

export default AboutMe;
