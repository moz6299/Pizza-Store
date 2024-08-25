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
      className={`flex flex-col overflow-hidden rounded-lg border shadow-lg transform hover:scale-105 ${
        soldOut ? 'bg-gray-300' : 'bg-white'
      } 
      w-full my-4 p-4`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-full md:w-1/3 h-40 sm:h-48 md:h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col flex-1 mt-4 md:mt-0">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mb-4">{ingredients.join(', ')}</p>
          <div className="mt-auto flex items-center justify-between">
            {!soldOut ? (
              <p className="text-lg font-bold text-gray-900">
                {formatCurrency(unitPrice)}
              </p>
            ) : (
              <p className="text-lg font-bold text-red-600">Sold out</p>
            )}

            {isItemInCart ? (
              <div className="flex items-center space-x-2">
                <UpdateItemQuantity id={id} />
                <DeleteItem id={id} />
              </div>
            ) : (
              !soldOut && (
                <Button onClick={handleAddToCart} className="text-sm md:text-base">
                  Add To Cart
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
