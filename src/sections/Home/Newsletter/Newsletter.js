import React from 'react';
import { Button, Checkbox } from '@/components/Common';
import styles from './Newsletter.module.scss';

const Newsletter = ({ content }) => {
  const { title, backgroundImage } = content;
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
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <input
                  className="w-full px-2 py-1 mb-4 text-xl leading-tight text-black placeholder-black bg-transparent border-b border-black appearance-none lg:mb-7 lg:text-3xl focus:outline-none "
                  type="text"
                  placeholder="First name"
                  aria-label="First name"
                />

                <input
                  className="w-full px-2 py-1 mb-4 text-xl leading-tight text-black placeholder-black bg-transparent border-b border-black appearance-none lg:mb-7 lg:text-3xl focus:outline-none"
                  type="text"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>

              <div className="mb-4 lg:mb-7">
                <input
                  className="w-full px-2 py-1 text-xl leading-tight text-black placeholder-black bg-transparent border-b border-black appearance-none lg:text-3xl focus:outline-none"
                  type="email"
                  placeholder="Your email"
                  aria-label="Your email"
                />
              </div>

              <div className={styles.phoneInput}>
                <div className="relative mb-4 lg:mb-7">
                  <div className="absolute top-0 bottom-0 left-0 flex">
                    <select className="text-xl bg-transparent focus:outline-none lg:text-3xl">
                      <option>+44</option>
                      <option>+1</option>
                      <option>+34</option>
                    </select>
                  </div>

                  <input
                    className="w-full py-1 pl-16 pr-2 text-xl leading-tight text-black placeholder-black bg-transparent border-b border-black appearance-none lg:pl-24 lg:text-3xl focus:outline-none"
                    type="number"
                    placeholder=""
                    aria-label="Phone number"
                  />
                </div>
              </div>

              <div className="mt-4 text-center lg:mt-7">
                <Checkbox label="Send news, updates and articles from VICE to my email" />
              </div>

              <div className="mt-4 lg:mt-7">
                <Button className="lg:w-50">Sign me up</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
