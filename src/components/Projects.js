import React from 'react';

const projects = [
  {
    title: 'MythWeaver',
    description: 'A MERN stack single-page application that allows users to create, share, and explore interactive stories.',
    link: 'https://myth-weaver-austin.onrender.com/',
    image: '/myth-weaver.gif', // Use the public directory path
  },
  {
    title: 'Procrastinot',
    description: 'An innovative productivity tool designed to help users manage their tasks and time efficiently.',
    link: 'https://procrastinot-austin.onrender.com/', // Replace with the actual link to your project
    image: '/procrastinot-gif.gif', // Use the public directory path
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-transparent flex flex-col items-center justify-center text-center section"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-offwhite">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} GIF`}
                className="mb-4"
              />
            )}
            <a href={project.link} className="text-red-500 hover:text-red-700">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
