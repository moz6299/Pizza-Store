import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, submitting, to, onClick }) => {
  const className =
    'bg-yellow-500 text-white ring-4 ring-yellow-500 hover:bg-yellow-600 hover:ring-yellow-600 rounded-full font-semibold shadow-md transition-all duration-300 focus:outline-none focus:ring-offset-2 focus:ring-offset-white';

  if (to) return <Link to={to} className={className}>{children}</Link>;

  return (
    <button
      onClick={onClick}
      className={`${
        submitting
          ? 'cursor-not-allowed bg-yellow-300 text-gray-600 ring-4 ring-yellow-300'
          : 'bg-yellow-500 text-white ring-4 ring-yellow-500 hover:bg-yellow-600 hover:ring-yellow-600'
      } ${className} w-full sm:w-auto text-center 
          px-2 py-1 text-xs
          sm:px-3 sm:py-2 sm:text-sm 
          md:px-4 md:py-3 md:text-base 
          lg:px-5 lg:py-4 lg:text-lg`}
    >
      {children}
    </button>
  );
};


export default Button;



