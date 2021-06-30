import React from 'react';

const Hero = ({ content }) => {
  const { label, title, backgroundImage } = content;
  return (
    <div
      className="flex flex-col items-center justify-center h-screen px-6 text-center bg-no-repeat bg-cover lg:px-20 md:px-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mx-auto max-w-7xl">
        <span className="text-base font-bold text-white uppercase lg:text-xl">{label}</span>
        <h1 className="text-5xl leading-none text-white lg:text-7xl pt-3.5">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
