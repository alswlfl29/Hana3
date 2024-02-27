import { Outlet, useNavigate } from 'react-router-dom';
import { Cart } from '../../contexts/session';
import { useState } from 'react';
import clsx from 'clsx';
import { useSession } from '../../contexts/session-context';

export const ItemLayout = () => {
  const navigate = useNavigate();
  const [currCart, setCurrCart] = useState<Cart | null>(null);

  const {
    session: { cart },
  } = useSession();

  const goCart = (item: Cart) => {
    setCurrCart(item);
    navigate(`/v1/items/${item.id}`);
  };

  return (
    <>
      <div className='flex justify-around'>
        <div className='bg-slate-300 w-1/3'>
          <h1 className='text-lg font-bold'>Item 목록</h1>
          {cart.map((item) => (
            <li key={item.id} className='list-none'>
              <button
                onClick={() => goCart(item)}
                className={clsx('text-base my-3 cursor-pointer', {
                  'text-red-600': currCart && currCart.id === item.id,
                })}
              >
                {item.name}
              </button>
            </li>
          ))}
        </div>
        <div className='flex flex-col w-1/2 justify-center'>
          <Outlet context={{ item: currCart }} />
        </div>
      </div>
    </>
  );
};
