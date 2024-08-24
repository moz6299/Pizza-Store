import { Link } from 'react-router-dom';
import Button from './../../ui/Button';
import LinkButton from './../../ui/LinkButton';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

/*const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];*/

function Cart() {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="container mx-auto p-4">
  <LinkButton
    to="/menu"
    className="mb-4 block text-yellow-500 hover:underline"
  >
    &larr; Back to menu
  </LinkButton>

  <h2 className="mb-6 text-2xl font-bold text-gray-900">Your Cart</h2>

  <ul className="space-y-4">
    {cart.map((item) => (
      <CartItem item={item} key={item.pizzaId} />
    ))}
  </ul>

  <div className="mt-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
    <Button to="/order/new" className="w-full sm:w-auto">
      Order Pizzas
    </Button>
    <button
      onClick={() => dispatch(clearCart())}
      className="w-full sm:w-auto rounded-md bg-red-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-red-600"
    >
      Clear Cart
    </button>
  </div>
</div>
  );
}

export default Cart;
