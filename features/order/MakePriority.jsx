import React from 'react';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../../services/apiRestaurant';

const MakePriority = () => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="mt-4">
  <button
    className="w-full sm:w-auto px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
  >
    Make it Priority
  </button>
</fetcher.Form>

  );
};

export default MakePriority;

export const action = async ({ request, params }) => {
  console.log('update');
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
};
