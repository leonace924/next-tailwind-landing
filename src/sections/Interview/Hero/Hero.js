import React from 'react';

const Hero = ({ title, relatedTopics }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center lg:px-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-5xl leading-none text-white lg:text-7xl pt-3.5">{title}</h1>
        <h4 className="text-base font-bold text-white uppercase lg:text-xl">Related topics</h4>
      </div>
    </div>
  );
};

export default Hero;
