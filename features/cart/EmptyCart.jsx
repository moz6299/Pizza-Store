import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-6 text-center">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="text-xl font-semibold text-gray-700">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
