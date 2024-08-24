import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from './../../ui/Button';
import { useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import { formatCurrency } from '../../utills/helpers';
import EmptyCart from '../cart/EmptyCart';
import store from './../../src/store';

// Validate phone number with regex
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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
];
*/
function CreateOrder() {
  const navigation = useNavigation();
  const submitting = navigation.state === 'submitting';
  const error = useActionData();
  const cart = useSelector(getCart);

  const username = useSelector((state) => state.user.userName);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const [withPriority, setWithPriority] = useState(false);

  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;

  const allPrice = totalCartPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
      <h2 className="mb-6 text-4xl font-extrabold text-gray-900">
        Place Your Order
      </h2>

      <Form method="POST" className="space-y-6">
        <div>
          <label
            htmlFor="customer"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            name="customer"
            id="customer"
            required
            className="mt-2 w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 shadow-sm transition-all duration-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your first name"
            defaultValue={username}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            className="mt-2 w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 shadow-sm transition-all duration-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your phone number"
          />
          {error && error.errors.phone && (
            <p className="mt-1 text-sm text-red-500">{error.errors.phone}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Delivery Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            required
            className="mt-2 w-full rounded-lg border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 shadow-sm transition-all duration-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter your delivery address"
          />
        </div>

        <div className="mt-4 flex items-center space-x-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-5 w-5 rounded border-gray-300 text-yellow-500 transition duration-300 focus:ring-2 focus:ring-yellow-500"
          />
          <label htmlFor="priority" className="text-sm text-gray-700">
            Give this order priority?
          </label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div className="mt-6">
          <Button
            submitting={submitting}
            className="w-full rounded-lg bg-yellow-500 py-3 text-lg font-semibold text-white shadow-md transition-all duration-300 hover:bg-yellow-600"
          >
            {submitting
              ? 'Placing Order...'
              : `Order Now ${formatCurrency(allPrice)} `}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const cart = JSON.parse(data.cart);

  const orderForm = {
    ...data,
    cart: cart,
    priority: data.priority === 'true' && true,
  };

  const errors = {};
  if (!isValidPhone(orderForm.phone))
    errors.phone = 'Not valid phone, please enter a correct phone number';

  if (Object.keys(errors).length > 0) {
    return { errors }; // Return errors if validation fails
  }

  //if all is Ok ?? then Post order
  const myOrder = await createOrder(orderForm);
  store.dispatch(clearCart());
  return redirect(`/order/${myOrder.id}`);
};

export default CreateOrder;
