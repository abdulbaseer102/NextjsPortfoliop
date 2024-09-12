// app/projects/page.tsx
import React from "react";
const ProjectCard: React.FC<{ title: string; description: string; image: string; link: string }> = ({ title, description, image, link }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-700 shadow-lg rounded-lg">
      <img src={image} alt={title} className="rounded-lg mb-4 w-full h-48 object-cover" />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 dark:text-blue-400 font-bold hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

const projects = [
  {
    title: "Project 1",
    description: "This is a description for project 1. It's a web app built with React.",
    image: "https://devdreaming.com/images/videos/nextjs-tutorial-build-portfolio-tailwind-css-framer-motion/Next.js%20portfolio%20website%20cover%20image-7U2OTNE5.png", // Replace with your image path
    link: "#",
  },
  {
    title: "Project 2",
    description: "This is a description for project 2. It's a mobile app built with Flutter.",
    image: "https://repository-images.githubusercontent.com/596620163/7dbc063d-8664-4708-a87a-286f6e02e0d6", // Replace with your image path
    link: "#",
  },
  {
    title: "Project 3",
    description: "This is a description for project 3. It's a landing page built with Next.js.",
    image: "https://colorlib.com/wp/wp-content/uploads/sites/2/jumpx-nextjs-template.jpg", // Replace with your image path
    link: "#",
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
