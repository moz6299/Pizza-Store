import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />
      <main className="overflow-auto flex flex-col items-center justify-start p-4">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
