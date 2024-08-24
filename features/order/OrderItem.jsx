import { formatCurrency } from './../../utills/helpers';

function OrderItem({ item, fetcherState, data }) {
  const { quantity, name, totalPrice, pizzaId } = item;

  return (
    <li className="flex flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
      <div>
        <p className="text-lg font-medium text-gray-700">
          <span className="font-semibold">{quantity}&times;</span> {name}
        </p>
        <p className="text-gray-600">{formatCurrency(totalPrice)}</p>
        <p className="text-sm text-gray-500">
          {fetcherState === 'loading'
            ? 'Loading...'
            : data
                ?.find((pizza) => pizzaId === pizza.id)
                ?.ingredients.join(', ')}
        </p>
      </div>
    </li>
  );
}

export default OrderItem;
