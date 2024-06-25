// // src/components/Projects.js
// import React from 'react';

// const projects = [
//   {
//     title: 'Project One',
//     description: 'This is a brief description of Project One.',
//     link: '#',
//   },
//   {
//     title: 'Project Two',
//     description: 'This is a brief description of Project Two.',
//     link: '#',
//   },
//   // Add more projects as needed
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex flex-col items-center justify-center text-center bg-transparent"
//     >
//       <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
//         {projects.map((project, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
//             <p className="text-gray-700 mb-4">{project.description}</p>
//             <a href={project.link} className="text-red-500 hover:text-red-700">
//               View Project
//             </a>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;




// src/components/Projects.js
import React from 'react';

const projects = [
  {
    title: 'lifeinvader Social Media App',
    description: 'Full stack social media application built with React, Node.js, Express.js, MongoDB, Socket.io, and AWS S3.',
    link: '#',
  },
  {
    title: 'Chakra Chat Messaging App',
    description: 'Instant messaging application built with Next.js, Firebase, and Chakra UI.',
    link: '#',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-transparent flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Projects</h2>
      <div className="w-full px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-8 flex flex-col md:flex-row items-center"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a href={project.link} className="text-red-500 hover:text-red-700">
                View Project
              </a>
            </div>
            <div className="flex-1">
              {/* Add a placeholder or actual image */}
              <img src="/path/to/project-image.jpg" alt={project.title} className="rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
