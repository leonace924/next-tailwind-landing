import React from 'react';
import Image from 'next/image';
import RoundText from '@/components/RoundText/RoundText';
import ArrowUpIcon from '../../../../public/icons/icon-arrow-up.svg';
import PhoneImage from '../../../../public/images/img-work-phone.jpg';
import WorkLaptopImage from '../../../../public/images/img-work-laptop.png';
import styles from './Content.module.scss';

const WorkContent = () => {
  return (
    <div>
      <div className="px-6 bg-purple-100 lg:px-20 md:px-12">
        <div className="w-full max-w-2xl mx-auto lg:max-w-7xl">
          <div className="pt-24 lg:pt-36">
            <div className="text-right">
              <Image src={ArrowUpIcon} alt="arrow-up" />
            </div>

            <div className={styles.workContent}>
              <div className="lg:grid lg:grid-cols-12 lg:gap-5">
                <div className="xl:col-start-2 xl:col-span-10 lg:col-start-1 lg:col-span-12">
                  <span>Case Study</span>
                  <h1>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue mattis arcu enim.
                  </h1>
                  <h3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id consectetur enim
                    lacus.
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec etiam urna, est
                    ut justo viverra ullamcorper. Tincidunt sed elit tincidunt amet arcu eget
                    pellentesque aliquet. Diam integer consequat est viverra viverra in. Malesuada
                    sagittis vitae sollicitudin ultrices integer quam ante bibendum.
                  </p>

                  <div className="max-w-3.25xl mx-auto mb-20 lg:mb-32">
                    <Image src={WorkLaptopImage} alt="work-phone" layout="responsive" />
                  </div>

                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis convallis eu eu
                    integer sit lacus, habitant viverra cras. Felis, egestas vel porta cras. Viverra
                    ac, lacus enim egestas feugiat nisl, feugiat tincidunt vel. Auctor blandit sit
                    odio ut mauris nisl neque eget. Eget nulla lacus, porttitor malesuada at. Felis
                    proin neque imperdiet.
                  </p>

                  <blockquote>
                    “Non feugiat consequat in semper donec. Eu tincidunt faucibus in adipiscing. Id
                    molestie est ultricies.”
                  </blockquote>

                  <p>
                    Vitae congue diam hac pharetra. Id augue dignissim lorem lectus ac quisque sit
                    fermentum ut. Quisque cursus sagittis, dignissim nec auctor hendrerit eros
                    pharetra, leo. Vivamus cras adipiscing diam quisque. Volutpat scelerisque enim
                    condimentum tortor imperdiet senectus. Tempus adipiscing imperdiet risus aliquam
                    volutpat. Id scelerisque neque mattis purus consequat. Ornare tellus eleifend.
                  </p>

                  <div className="max-w-xl mx-auto mb-20 lg:mb-32">
                    <Image src={PhoneImage} alt="work-phone" />
                  </div>

                  <div className="max-w-3.25xl mx-auto mb-20 lg:mb-32">
                    <div className="grid lg:grid-cols-3 gap-9">
                      <div>
                        <Image src={PhoneImage} alt="work-phone" layout="responsive" />
                      </div>

                      <div>
                        <Image src={PhoneImage} alt="work-phone" layout="responsive" />
                      </div>

                      <div>
                        <Image src={PhoneImage} alt="work-phone" layout="responsive" />
                      </div>
                    </div>
                  </div>

                  <h2>Getting the word out</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis convallis eu eu
                    integer sit lacus, habitant viverra cras. Felis, egestas vel porta cras. Viverra
                    ac, lacus enim egestas feugiat nisl, feugiat tincidunt vel. Auctor blandit sit
                    odio ut mauris nisl neque eget. Eget nulla lacus, porttitor malesuada at. Felis
                    proin neque imperdiet.
                  </p>

                  <h4>Results</h4>
                  <div className="grid gap-4 text-center lg:grid-cols-3">
                    <div>
                      <h5 className="text-6xl lg:text-8.5xl">29.8k</h5>
                      <p>turpis molestie pulvinar</p>
                    </div>

                    <div>
                      <h5 className="text-6xl lg:text-8.5xl">26%</h5>
                      <p>facilisi lectus</p>
                    </div>

                    <div>
                      <h5 className="text-6xl lg:text-8.5xl">81</h5>
                      <p>countries lorem ipsum</p>
                    </div>
                  </div>

                  <h2>Faucibus arcu eget non sit.</h2>
                  <p>
                    Nisi egestas cras lobortis lacus. In aenean nunc scelerisque ipsum hendrerit
                    lectus nibh ultricies. Morbi urna aliquam tincidunt integer sit nunc gravida
                    posuere. Sem sed amet, tortor duis tellus. Egestas tempus, eget pellentesque
                    viverra pulvinar laoreet sit lacus. Dolor, mattis auctor id lorem in elit nunc.
                    Ut odio enim, vitae praesent id morbi nisl. Dui aliquam et enim velit. Vehicula
                    aliquam nisl, nunc ut non quam sed suscipit. Gravida ac velit elementum nunc
                    purus, tincidunt. Arcu aliquam sed cursus amet, magna.
                  </p>

                  <blockquote>
                    “Lobortis ut maecenas justo aliquam aliquam tristique iaculis. Sit aliquam est
                    elementum nibh diam lorem. Sed montes, massa bibendum ac facilisi arcu ornare
                    orci leo. Ut lobortis facilisis id semper risus.”
                  </blockquote>

                  <p>
                    Nisi egestas cras lobortis lacus. In aenean nunc scelerisque ipsum hendrerit
                    lectus nibh ultricies. Morbi urna aliquam tincidunt integer sit nunc gravida
                    posuere. Sem sed amet, tortor duis tellus. Egestas tempus, eget pellentesque
                    viverra pulvinar laoreet sit lacus. Dolor, mattis auctor id lorem in elit nunc.
                    Ut odio enim, vitae praesent id morbi nisl. Dui aliquam et enim velit. Vehicula
                    aliquam nisl, nunc ut non quam sed suscipit. Gravida ac velit elementum nunc
                    purus, tincidunt. Arcu aliquam sed cursus amet, magna.
                  </p>

                  <h2>Download the complete case study</h2>

                  <div className={styles.workContentReadMore}>
                    <h2>Read more about</h2>
                    <div className="flex flex-wrap items-center md:justify-center ">
                      <RoundText>Case Study</RoundText>
                      <RoundText>Live Streaming</RoundText>
                      <RoundText>Arts &amp; Culture</RoundText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkContent;
