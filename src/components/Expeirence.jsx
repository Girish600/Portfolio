import React from "react";
import image from "../assets/portfolio/pexels.jpg";

const Expeirence = () => {
  const techs = [
    {
      id: 1,
      src: image,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: image,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: image,
      title: "javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: image,
      title: "React",
      style: "shadow-Blue-500",
    },
    {
      id: 5,
      src: image,
      title: "Tailwind",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: image,
      title: "Next Js",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: image,
      title: "MongoDb",
      style: "shadow-white-500",
    },
    {
      id: 8,
      src: image,
      title: "Github",
      style: "shadow-gray-500",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-black text-white py-20"
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
