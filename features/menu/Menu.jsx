import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menuData = useLoaderData();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">Our Menu</h2>
      <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menuData.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;
