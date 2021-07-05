import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="w-full px-6 py-12 lg:px-20 lg:py-20 md:px-12 lg:pb-14">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-4">
            <div className="flex items-center justify-center lg:justify-start lg:items-start lg:col-start-1 lg:col-span-2">
              <Link href="/" passHref>
                <a>
                  <Logo color="dark" />
                </a>
              </Link>
            </div>

            <div className={styles.footerList}>
              <div className="pb-6 mt-10 border-b border-light-gray lg:pb-10 lg:m-0">
                <div className="grid grid-cols-2 gap-6 gap-y-8 lg:grid-cols-5">
                  <div className={styles.footerListItem}>
                    <h5>DICE</h5>
                    <ul>
                      <li>About</li>
                      <li>Jobs</li>
                      <li>Diversity, Equity & Inclusion</li>
                      <li>Press</li>
                    </ul>
                  </div>

                  <div className={styles.footerListItem}>
                    <h5>Work with Us</h5>
                    <ul>
                      <li>Artists</li>
                      <li>Venues & Promoters</li>
                      <li>Brands</li>
                    </ul>
                  </div>

                  <div className={styles.footerListItem}>
                    <h5>Support</h5>
                    <ul>
                      <li>Help Centre</li>
                      <li>COVID Update</li>
                    </ul>
                  </div>

                  <div className={styles.footerListItem}>
                    <h5>Download</h5>
                    <ul>
                      <li>iOS</li>
                      <li>Android</li>
                    </ul>
                  </div>

                  <div className={styles.footerListItem}>
                    <h5>Follow</h5>
                    <ul>
                      <li>Instagram</li>
                      <li>Twitter</li>
                      <li>LinkedIn</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={styles.footerListBottom}>
                <ul className="flex flex-wrap items-center justify-between mb-4 lg:inline-grid lg:grid-cols-3 lg:gap-9 lg:mb-0">
                  <li>Privacy Policy</li>
                  <li>Terms of Use</li>
                  <li>Purchase Terms</li>
                </ul>

                <p className="text-base text-center text-black">© Vice 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
