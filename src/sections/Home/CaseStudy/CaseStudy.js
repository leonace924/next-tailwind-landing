import React from 'react';

const CaseStudy = ({ content }) => {
  const { title, label } = content;

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center lg:px-20 md:px-12 bg-light-yellow">
      <div className="w-full max-w-2xl mx-auto lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="lg:col-start-2 lg:col-span-10">
            <span className="mb-2 text-base font-bold text-black uppercase lg:text-xl lg:mb-3">
              {label}
            </span>
            <h2 className="text-5xl leading-none text-black lg:text-6xl">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
