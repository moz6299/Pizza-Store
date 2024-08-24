import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';

function CartOverview() {
  const cartQuantity = useSelector(getTotalCartQuantity);
  const cartPrice = useSelector(getTotalCartPrice);

  if (!cartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 text-stone-200">
      <p className="space-x-4 text-xl uppercase text-stone-300">
        <span>{cartQuantity} pizzas</span>
        <span>${cartPrice}</span>
      </p>
      <Link to="/cart" className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
