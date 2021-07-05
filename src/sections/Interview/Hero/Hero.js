import React from 'react';
import RoundText from '@/components/RoundText/RoundText';

const Hero = ({ title, relatedTopics }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 pt-32 text-center lg:pb-25 lg:px-20 md:px-12 lg:pt-48">
      <div className="mx-auto max-w-7xl">
        <h1 className="pb-8 text-5xl leading-none text-black lg:text-7xl lg:pb-12">{title}</h1>
        <h4 className="text-3xl text-black lg:text-4xl">Related topics</h4>
        <div className="flex flex-wrap items-center mt-6 md:justify-center lg:mt-11">
          {relatedTopics.map((topic, id) => (
            <RoundText key={id}>{topic.label}</RoundText>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
