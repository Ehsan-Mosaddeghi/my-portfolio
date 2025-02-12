import AboutMeItem from "../_components/AboutMeItem";

const page = () => {
  return (
    <div className="container mx-auto px-2 py-12 space-y-10">
      <AboutMeItem title="My Journey as a Frontend Developer">
        My fascination with frontend development began when I was just 16. I that I had a creative streak and a passion
        for working with design and colors. As I delved deeper into the world of coding, I realized that frontend
        development was the perfect blend of art and technology. I found myself drawn to the idea of bringing designs to
        life, creating interactive experiences, and making a visual impact. It was then that I knew I wanted to pursue a
        career in frontend development, and I&apos;ve been hooked ever since!
      </AboutMeItem>

      <AboutMeItem title="My Interests and Hobbies">
        Playing games that challenge my problem-solving skills and creativity Reading books on science, technology, and
        philosophy Watching movies that explore the human condition and the future of technology Listening to podcasts
        on topics ranging from AI and machine learning to entrepreneurship and personal growth
      </AboutMeItem>

      <AboutMeItem title="My Goals and Aspirations">
        As I embark on my university journey, I&apos;m eager to expand my knowledge, develop my skills, and contribute
        to the tech community. My ultimate goal is to create innovative solutions that positively impact people&apos;s
        lives and make a difference in the world.
      </AboutMeItem>

      <AboutMeItem title="Get in Touch">
        If you&apos;d like to learn more about my projects, experiences, or interests, feel free to explore my portfolio
        or reach out to me directly. I&apos;m always open to new opportunities, collaborations, and conversations about
        the latest tech trends and ideas.
      </AboutMeItem>
    </div>
  );
};

export default page;
