import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/Common';

const GetMission = ({ content }) => {
  const { title, ctaLabel, ctaLink, backgroundImage } = content;
  return (
    <div
      className="flex flex-col items-center justify-center h-screen px-6 text-center bg-no-repeat bg-cover lg:px-20 md:px-12"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-2xl mx-auto lg:max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-5">
          <div className="xl:col-start-4 xl:col-span-6 lg:col-start-3 lg:col-span-8">
            <div className="mb-7 lg:mb-10">
              <h2 className="text-3xl text-black leading-extra-tight lg:text-5xl">{title}</h2>
            </div>

            <div className="w-full">
              <div className="mt-4 lg:mt-7">
                <Link href={ctaLink} passHref>
                  <a>
                    <Button className="lg:w-50">{ctaLabel}</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetMission;
