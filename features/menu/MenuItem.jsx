import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utills/helpers';
import { addItem, getItemQuantityInCart } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza;
  const dispatch = useDispatch();
  const itemQuantityInCart = useSelector(getItemQuantityInCart(id));
  const isItemInCart = itemQuantityInCart > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  };

  return (
    <li
      className={`flex flex-col overflow-hidden rounded-lg border shadow-lg transition-transform transform hover:scale-105 ${
        soldOut ? 'bg-gray-300' : 'bg-white'
      } 
      w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2`}
    >
      <img
        src={imageUrl}
        alt={name}
        className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 w-full object-cover"
      />
      <div className="flex flex-col flex-1 p-4 space-y-3">
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-800">
          {name}
        </h3>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-red-600">
              Sold out
            </p>
          )}

          {isItemInCart ? (
            <div className="flex items-center space-x-2">
              <UpdateItemQuantity id={id} />
              <DeleteItem id={id} />
            </div>
          ) : (
            !soldOut && (
              <Button onClick={handleAddToCart} className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Add To Cart
              </Button>
            )
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
