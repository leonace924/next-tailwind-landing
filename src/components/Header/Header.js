import React from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo/Logo';

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full p-6 lg:px-20 md:px-12 z-1000">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
        <div className="text-base text-white underline lg:text-xl">Partner with VICE</div>
      </div>
    </div>
  );
};

export default Header;
