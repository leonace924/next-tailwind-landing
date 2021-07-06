import React from 'react';

const Search = ({ mode }) => {
  return (
    <div className={`relative w-full text-${mode}`}>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button className="p-1 focus:outline-none focus:shadow-outline">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.4232 12.4278C13.5827 11.2694 14.3 9.66847 14.3 7.9C14.3 4.36538 11.4346 1.5 7.9 1.5C4.36538 1.5 1.5 4.36538 1.5 7.9C1.5 11.4346 4.36538 14.3 7.9 14.3C9.66616 14.3 11.2652 13.5846 12.4232 12.4278ZM12.4232 12.4278L16.4333 16.4379"
              stroke="currentColor"
              strokeWidth="1.06667"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </span>
      <input
        type="search"
        name="q"
        className={`w-full py-2 pl-10 pr-4 text-sm text-${mode} placeholder-${mode} bg-transparent border border-${mode} rounded-full focus:outline-none focus:text-gray-900`}
        placeholder="Search the blog"
        autoComplete="off"
      />
    </div>
  );
};

export default Search;
