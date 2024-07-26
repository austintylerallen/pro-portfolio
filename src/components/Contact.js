import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_knc0xmx', 'template_q24djh5', form.current, 'tk1iJvd2UTqn9mmLh')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });
    e.target.reset();
  };

  return (
    <div className="h-screen flex items-center justify-center section" id="contact">
      <div className="p-8 rounded shadow-md w-full max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-white font-montserrat mb-6 text-center">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300">Name</label>
            <input type="text" name="user_name" className="p-2 rounded bg-gray-800 text-white" required />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300">Email</label>
            <input type="email" name="user_email" className="p-2 rounded bg-gray-800 text-white" required />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-300">Message</label>
            <textarea name="message" className="p-2 rounded bg-gray-800 text-white" rows="4" required />
          </div>
          <button type="submit" className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700">
            Send
          </button>
        </form>
        <div className="mt-6 flex flex-col space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-red-500 text-2xl" />
            <p className="text-gray-300 text-lg">
              <a href="mailto:austintallen07@gmail.com" className="text-red-500 hover:text-red-700">austintallen07@gmail.com</a>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={faPhone} className="text-red-500 text-2xl" />
            <p className="text-gray-300 text-lg">+1 (575) 270-3779</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={faGithub} className="text-red-500 text-2xl" />
            <p className="text-gray-300 text-lg">
              <a href="https://github.com/austintylerallen" className="text-red-500 hover:text-red-700">GitHub</a>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <FontAwesomeIcon icon={faLinkedin} className="text-red-500 text-2xl" />
            <p className="text-gray-300 text-lg">
              <a href="https://linkedin.com/in/austintylerallen1234" className="text-red-500 hover:text-red-700">LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
