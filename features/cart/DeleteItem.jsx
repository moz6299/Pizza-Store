import React from 'react';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';

const DeleteItem = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button
      className="rounded-lg bg-red-500 px-2 py-1 text-xs text-white shadow-md transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 md:text-base lg:px-5 lg:py-4 lg:text-lg"
      onClick={() => dispatch(deleteItem(id))}
    >
      Delete
    </button>
  );
};

export default DeleteItem;
