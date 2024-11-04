import React from 'react';
import useFadeInOnScroll from '../hooks/useFadeInOnScroll'; // Import the hook

// Importing SVG icons with the specified naming convention
import html5Icon from '../assets/html5-color.svg';
import css3Icon from '../assets/css3-color.svg';
import javascriptIcon from '../assets/javascript-color.svg';
import reactIcon from '../assets/react-color.svg';
import nodejsIcon from '../assets/nodedotjs-color.svg';
import mongodbIcon from '../assets/mongodb-color.svg';
import expressIcon from '../assets/express-color.svg';
import graphqlIcon from '../assets/graphql-color.svg';
import apolloClientServerIcon from '../assets/apollographql-color.svg';
import jwtIcon from '../assets/jsonwebtokens-color.svg';
import tailwindcssIcon from '../assets/tailwindcss-color.svg';
import bootstrapIcon from '../assets/bootstrap-color.svg';
import reduxIcon from '../assets/redux-color.svg';
import sequelizeIcon from '../assets/sequelize-color.svg';
import handlebarsIcon from '../assets/handlebarsdotjs-color.svg';
import herokuIcon from '../assets/heroku-color.svg';
import githubIcon from '../assets/github-color.svg';
import cloudinaryIcon from '../assets/cloudinary-color.svg';
import axiosIcon from '../assets/axios-color.svg';
import nextjsIcon from '../assets/nextdotjs-color.svg';
import dockerIcon from '../assets/docker-color.svg';
import renderIcon from '../assets/render-color.svg';
import sassIcon from '../assets/sass-color.svg';

const mainTechnologies = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Node.js', icon: nodejsIcon },
  { name: 'MongoDB', icon: mongodbIcon },
  { name: 'Express.js', icon: expressIcon },
];

const smallerTechnologies = [
  { name: 'GraphQL', icon: graphqlIcon },
  { name: 'Apollo Client & Server', icon: apolloClientServerIcon },
  { name: 'JWT', icon: jwtIcon },
  { name: 'Tailwind CSS', icon: tailwindcssIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'Redux', icon: reduxIcon },
  { name: 'Sequelize', icon: sequelizeIcon },
  { name: 'Handlebars.js', icon: handlebarsIcon },
  { name: 'Heroku', icon: herokuIcon },
  { name: 'GitHub', icon: githubIcon },
  { name: 'Cloudinary', icon: cloudinaryIcon },
  { name: 'Axios', icon: axiosIcon },
  { name: 'Next.js', icon: nextjsIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'Render', icon: renderIcon },
  { name: 'Sass', icon: sassIcon },
];

const Technologies = () => {
  const techRef = useFadeInOnScroll(0.5); // Use the hook

  return (
    <section ref={techRef} className="bg-gray-900 bg-opacity-50 py-24 section fade-in" id="technologies">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8">Technologies</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-white mb-12">
            Throughout my projects, I have utilized a wide range of technologies to build robust and scalable applications. Below are some of the main and additional technologies I have experience with:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {mainTechnologies.slice(0, 3).map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <img src={tech.icon} alt={tech.name} className="h-20 mb-4" />
                <p className="text-white">{tech.name}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {mainTechnologies.slice(3, 6).map((tech) => (
              <div key={tech.name} className="flex flex-col items-center">
                <img src={tech.icon} alt={tech.name} className="h-20 mb-4" />
                <p className="text-white">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden py-8 marquee-container">
          <div className="animate-marquee flex space-x-8">
            {smallerTechnologies.concat(smallerTechnologies).map((tech, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0">
                <img src={tech.icon} alt={tech.name} className="h-12 mb-2" />
                <p className="text-white text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;