import React from 'react';

const RoundText = ({ children }) => {
  return (
    <div className="px-6 py-1 my-2 mr-4 text-sm font-bold uppercase border border-black rounded-full lg:mr-6 lg:text-base lg:px-7 lg:py-3 lg:my-3">
      {children}
    </div>
  );
};

export default RoundText;
