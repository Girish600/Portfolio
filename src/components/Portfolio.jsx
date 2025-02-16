import React from "react";
import image from "../assets/portfolio/pexels.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: image,
    },
    {
      id: 2,
      src: image,
    },
    {
      id: 3,
      src: image,
    },
    {
      id: 4,
      src: image,
    },
    {
      id: 5,
      src: image,
    },
    {
      id: 6,
      src: image,
    },
  ];

  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white py-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolio.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
