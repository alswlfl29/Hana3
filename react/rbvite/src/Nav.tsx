import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    // src/Nav.tsx
    <nav>
      <ul className='flex justify-around text-blue-500 mb-7'>
        <li>
          <NavLink to='/' replace>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'>Login</NavLink>
        </li>
        <li>
          <NavLink to='/my'>My</NavLink>
        </li>
        <li>
          <NavLink
            to='/posts'
            style={({ isActive }) => {
              return { color: isActive ? 'red' : 'inherit' };
            }}
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/hello'
            className={({ isActive, isPending, isTransitioning }) =>
              clsx({
                'text-red-500': isActive,
                'border border-red-500': isPending || isTransitioning,
              })
            }
          >
            Hello
          </NavLink>
        </li>
        <li>
          <NavLink to='/sample'>Sample</NavLink>
        </li>
        <li>
          <NavLink
            to='/defertrans'
            className={({ isActive, isPending, isTransitioning }) => {
              return clsx({
                'text-red-500': isActive,
                'border border-red-500': isPending || isTransitioning,
              });
            }}
          >
            DeferTrans
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/v1/items'
            className={({ isActive, isPending, isTransitioning }) => {
              return clsx({
                'text-red-500': isActive,
                'border border-red-500': isPending || isTransitioning,
              });
            }}
          >
            Items
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/v2/items'
            className={({ isActive, isPending, isTransitioning }) => {
              return clsx({
                'text-red-500': isActive,
                'border border-red-500': isPending || isTransitioning,
              });
            }}
          >
            ItemsV2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
