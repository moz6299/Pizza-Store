import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.userName);
  return (
    <div className="my-10 px-4 text-center">
      <h1 className="mb-8 text-center text-xl font-semibold text-stone-700 md:text-4xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" >Continue Ordering, {username}</Button>
      )}
    </div>
  );
}

export default Home;
