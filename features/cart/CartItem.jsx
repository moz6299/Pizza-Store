import Button from "../../ui/Button";
import { formatCurrency } from "../../utills/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { name, quantity, totalPrice,pizzaId } = item;

  return (
    <li className="flex flex-col sm:flex-row justify-between items-center border-b py-4">
  <div className="text-center sm:text-left">
    <p className="text-lg font-semibold text-gray-800">
      {quantity} × {name}
    </p>
  </div>
  <div className="mt-4 sm:mt-0 flex items-center space-x-4">
    <p className="text-lg font-bold text-gray-900">
      {formatCurrency(totalPrice)}
    </p>
    <UpdateItemQuantity id={pizzaId} quantity={quantity} />
    <DeleteItem id={pizzaId} />
  </div>
</li>

  );
}

export default CartItem;
