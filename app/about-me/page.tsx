"use client";

import AboutMeItem from "../_components/AboutMeItem";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="container mx-auto px-2">
      <h1 className="text-3xl brightness mt-10">About Me</h1>
      <p className="text-lg">A few words about me</p>

      <motion.div
        className="py-12 space-y-10"
        initial={{ filter: "blur(6px)", opacity: 0 }}
        animate={{ filter: "blur(0)", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AboutMeItem title="My Journey as a Frontend Developer">
          My fascination with frontend development began when I was just 16. I that I had a creative streak and a
          passion for working with design and colors. As I delved deeper into the world of coding, I realized that
          frontend development was the perfect blend of art and technology. I found myself drawn to the idea of bringing
          designs to life, creating interactive experiences, and making a visual impact. It was then that I knew I
          wanted to pursue a career in frontend development, and I&apos;ve been hooked ever since!
        </AboutMeItem>

        <AboutMeItem title="My Interests and Hobbies">
          Playing games that challenge my problem-solving skills and creativity Reading books on science, technology,
          and philosophy Watching movies that explore the human condition and the future of technology Listening to
          podcasts on topics ranging from AI and machine learning to entrepreneurship and personal growth
        </AboutMeItem>

        <AboutMeItem title="My Goals and Aspirations">
          As I embark on my university journey, I&apos;m eager to expand my knowledge, develop my skills, and contribute
          to the tech community. My ultimate goal is to create innovative solutions that positively impact people&apos;s
          lives and make a difference in the world.
        </AboutMeItem>

        <AboutMeItem title="Get in Touch">
          If you&apos;d like to learn more about my projects, experiences, or interests, feel free to explore my
          portfolio or reach out to me directly. I&apos;m always open to new opportunities, collaborations, and
          conversations about the latest tech trends and ideas.
        </AboutMeItem>
      </motion.div>
    </div>
  );
};

export default page;
