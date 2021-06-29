import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="py-4 text-xs font-bold text-white uppercase transition bg-black px-9 rounded-4xl hover:bg-gray-800 focus:bg-gray-700">
      {children}
    </button>
  );
};

export default Button;
