import React from "react";
import Portfolio from "./Portfolio";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          I am a MERN Stack Developer with 1 year of experience in building
          modern and scalable web applications. My expertise includes MongoDB,
          Express.js, React.js, and Node.js, allowing me to develop full-stack
          solutions with seamless performance.<br/>

           <br/>On the frontend, I specialize in
          React.js, Redux, Tailwind CSS, and Chakra UI, crafting responsive and
          user-friendly interfaces. On the backend, I work with Node.js and
          Express.js, building RESTful APIs, authentication systems, and
          database management using MongoDB and Mongoose. I have developed
          projects like ChatWave, an AI-powered chat application, and an
          E-commerce platform with Redux-based state management. <br/>
          <br/>I am passionate
          about optimizing applications, integrating APIs, and delivering
          high-quality code. I love learning new technologies and collaborating
          on innovative projects. Let’s connect and build something amazing!
        </p>
      </div>
    </div>
  );
};

export default About;
