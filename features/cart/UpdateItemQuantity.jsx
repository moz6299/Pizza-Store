import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  getItemQuantityInCart,
  increaseQuantity,
} from './cartSlice';

const UpdateItemQuantity = ({ id }) => {
  const dispatch = useDispatch();
  const currenItemQuantityInCart = useSelector(getItemQuantityInCart(id));

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => dispatch(increaseQuantity(id))}
        className="rounded-full bg-green-500 px-2 py-1 text-xs text-white transition-colors duration-300 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 md:text-base lg:px-5 lg:py-4 lg:text-lg"
      >
        +
      </button>
      <span className="text-xs font-semibold text-gray-900 sm:text-sm md:text-base lg:text-lg">
        {currenItemQuantityInCart}
      </span>
      <button
        onClick={() => dispatch(decreaseQuantity(id))}
        className="rounded-full bg-red-500 px-2 py-1 text-xs text-white transition-colors duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 sm:px-3 sm:py-2 sm:text-sm md:px-4 md:py-3 md:text-base lg:px-5 lg:py-4 lg:text-lg"
      >
        -
      </button>
    </div>
  );
};

export default UpdateItemQuantity;
