import React from 'react';

const Hero = ({ content }) => {
  const { backgroundImage } = content;
  return (
    <div
      className="flex flex-col items-center justify-center h-screen px-6 text-center bg-no-repeat bg-cover lg:px-20 md:px-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  );
};

export default Hero;
