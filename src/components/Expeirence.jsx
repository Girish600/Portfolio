import React from "react";
import html from "../assets/portfolio/html.png";
import css from "../assets/portfolio/css.png";
import javascript from "../assets/portfolio/javascript.png";
import react01 from "../assets/portfolio/react01.png";
import tailwind from "../assets/portfolio/tailwind.png";
import node from "../assets/portfolio/node.png";
import express from "../assets/portfolio/express.png";
import github from "../assets/portfolio/github.png";
import mongodb from "../assets/portfolio/mongodb.webp";

const Expeirence = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react01,
      title: "React",
      style: "shadow-blue-500",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: node,
      title: "Node.js",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: express,
      title: "Express.js",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    }
  ];
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col w-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expeirence;
