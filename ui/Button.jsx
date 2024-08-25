import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, submitting, to, onClick }) => {
  const className =
    'bg-yellow-500 text-white ring-4 ring-yellow-500 hover:bg-yellow-600 hover:ring-yellow-600 rounded-full font-semibold shadow-md transition-all duration-300 focus:outline-none focus:ring-offset-2 focus:ring-offset-white';

  if (to) return <Link to={to} className={`${className} w-32 text-center`}>{children}</Link>;

  return (
    <button
      onClick={onClick}
      className={`${
        submitting
          ? 'cursor-not-allowed bg-yellow-300 text-gray-600 ring-4 ring-yellow-300'
          : 'bg-yellow-500 text-white ring-4 ring-yellow-500 hover:bg-yellow-600 hover:ring-yellow-600'
      } ${className} w-32 text-center`}
    >
      {children}
    </button>
  );
};

export default Button;
