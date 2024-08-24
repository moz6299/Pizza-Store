import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./../ui/Home";
import Menu, { loader as menuLoader } from "./../features/menu/Menu";
import CreateUser from "./../features/user/CreateUser";
import Order, { loader as orderLoader } from "./../features/order/Order";
import CreateOrder, {action as createOrderAction} from "./../features/order/CreateOrder";
import {action as updateOrderAction} from "./../features/order/MakePriority";
import OrderItem from "./../features/order/OrderItem";
import AppLayout from "../ui/AppLayout";
import Cart from "./../features/cart/Cart";
import Error from "./../ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <Menu />,errorElement:<Error />, loader: menuLoader  },
      { path: "/user", element: <CreateUser /> },
      { path: "/cart", element: <Cart /> },
      { path: "/order", element: <OrderItem /> },
      { path: "/order/new", element: <CreateOrder />, action : createOrderAction },
      { path: "/order/:orderId", element: <Order />, loader: orderLoader, errorElement:<Error />, action:updateOrderAction },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
