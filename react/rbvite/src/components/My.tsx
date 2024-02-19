import { Cart, Session } from '../App';
import { Login } from './Login';
import { Profile } from './Profile';

type Props = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
};

export const My = ({
  session: { loginUser, cart },
  login,
  logout,
  removeItem,
}: Props) => {
  return (
    <div
      style={{ border: '2px solid red', marginBottom: '2rem', padding: '1rem' }}
    >
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul>
        {/* {cart.map((item: Cart) => (
          <li key={item.id}>
            {item.name} ({item.price.toLocaleString()}원)
          </li>
        ))} */}
        {cart.map(({ id, name, price }: Cart) => (
          <li key={id}>
            {name} ({price.toLocaleString()}원)
            <button title={`removeItem(${id})`} onClick={() => removeItem(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
