import { Outlet, useNavigate } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';
import { Cart } from '../../contexts/session';
import { useState } from 'react';
import { FaRegCircleUser } from 'react-icons/fa6';

export const ItemLayout = () => {
  const [currItem, setCurrItem] = useState<Cart | null>(null);
  const navigate = useNavigate();
  const {
    session: { loginUser },
  } = useSession();

  const setOutletItem = (item: Cart) => {
    setCurrItem(item);
    navigate(`/v2/items/${item.id}`);
  };
  return (
    <>
      <header className='flex flex-row justify-between mb-2 px-3 bg-cyan-500 text-white'>
        <div>
          <button>장바구니</button>
        </div>
        <div>
          {loginUser ? (
            <div className='inline-flex'>
              <FaRegCircleUser className='mt-1' />
              <span className='ml-2'>{loginUser.name}</span>
            </div>
          ) : (
            <button onClick={() => navigate('/login')}>SignIn</button>
          )}
        </div>
      </header>

      <div className='border border-sky-500 rounded-lg p-5'>
        <Outlet context={{ setOutletItem, item: currItem }} />
      </div>

      <footer>@Copyright Hanaro</footer>
    </>
  );
};
