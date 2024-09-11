// pages/about.js
import Image from 'next/image';
import SkillCard from '../skill/page';
import hero from '../Imae/hero.jpeg'
const About = () => {
  return (
    <div className="bg-slate-400 text-gray-800 dark:text-white">
      <section className="py-16 px-4 md:px-16">
        <div className="container mx-auto">
          {/* Introduction Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Me
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                Hi! I'm Alex Thompson, a passionate web developer and UI/UX designer with over 5 years of experience in creating visually appealing and user-centric websites. I love working with modern tools like JavaScript, React, and Tailwind CSS to craft amazing digital experiences.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                My goal is to build responsive, scalable, and accessible websites that enhance user engagement and deliver exceptional results. Let's collaborate and bring your next project to life!
              </p>
            </div>

            {/* Photo Section */}
            <div className="md:w-1/2 mt-10 md:mt-0 md:ml-12">
              <Image
                src={hero} // Make sure to add your photo in the public directory
                alt="Alex Thompson"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard skill="JavaScript" level="90%" />
            <SkillCard skill="React" level="85%" />
            <SkillCard skill="Next.js" level="80%" />
            <SkillCard skill="Tailwind CSS" level="95%" />
            <SkillCard skill="UI/UX Design" level="90%" />
            <SkillCard skill="Node.js" level="75%" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About