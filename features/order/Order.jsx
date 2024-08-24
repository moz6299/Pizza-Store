import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from './../../utills/helpers';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import MakePriority from './MakePriority';

function Order() {
  const order = useLoaderData();
  console.log(order);
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  }, [fetcher]);

  console.log(fetcher.data);

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">Order Status</h2>

        <div className="flex items-center space-x-2">
          {priority && (
            <span className="rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-white">
              Priority
            </span>
          )}
          <span
            className={`rounded-full px-3 py-1 text-sm font-semibold text-white ${status === 'delivered' ? 'bg-green-500' : 'bg-blue-500'}`}
          >
            {status} order
          </span>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-700">
          {deliveryIn >= 0
            ? `Only ${deliveryIn} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-sm text-gray-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="space-y-4">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            data={fetcher.data}
            fetcherState={fetcher.state}
          />
        ))}
      </ul>

      <div className="mt-6 border-t pt-4">
        <p className="text-lg font-semibold text-gray-800">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-lg font-semibold text-gray-800">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-xl font-bold text-gray-900">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
        {!priority && <MakePriority />}
      </div>
    </div>
  );
}

export const loader = async ({ params }) => {
  const order = await getOrder(params.orderId);
  return order;
};

export default Order;
