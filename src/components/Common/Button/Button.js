import React from 'react';

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={`${className} py-4 text-xs font-bold text-white uppercase transition bg-black px-9 rounded-4xl hover:bg-gray-800 focus:bg-gray-700`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
