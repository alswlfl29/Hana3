/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  RefObject,
  createContext,
  useContext,
  useState,
} from 'react';
import { ItemHandler } from '../components/My';
import { Session, Cart } from './session';

const SampleSession = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type SessionContextProp = {
  session: Session;
  login: (id: number, name: string) => void;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: ({ id, name, price }: Cart) => void;
};

const SessionContext = createContext<SessionContextProp>({
  session: {
    loginUser: null,
    cart: [],
  },
  login: () => {},
  logout: () => {},
  removeItem: () => {},
  saveItem: () => {},
});

type ProviderProps = {
  children: ReactNode;
  myHandlerRef?: RefObject<ItemHandler>;
};

// export const SessionProvider = ({ children }: PropsWithChildren) => {
export const SessionProvider = ({ children }: ProviderProps) => {
  const [session, setSession] = useState<Session>(SampleSession);

  // TODO:validation checking
  const login = (id: number, name: string) => {
    setSession({
      ...session,
      loginUser: { id, name },
    });
  };

  const logout = () => {
    // setSession({ cart: [...session.cart], loginUser: null });
    setSession({ ...session, loginUser: null });
    // session.loginUser = null; // 이러면 virtualDom이 모름
  };

  const removeItem = (itemId: number) => {
    // 제일 많이 사용되는 방식이지만, 세션이 크다면 좀 무거움 -> 전부 바뀔거냐
    setSession({
      ...session,
      cart: [...session.cart.filter((item) => item.id !== itemId)],
      // cart: session.cart.filter((item) => item.id !== itemId), // 성능 면에서는 좋음..?
    });
    // callByreference -> 부분만 바뀔거냐의 차이 -> 이렇게 사용하면 리렌더가 안일어남
    // Virtual-DOM의 rerender() 호출 안함(:session의 주소는 안변했으니까!)
    // session.cart = session.cart.filter((item) => item.id !== itemId);
  };

  // add(id===0) or modify(id!==0) item
  const saveItem = ({ id, name, price }: Cart) => {
    const { cart } = session;
    const foundItem = id !== 0 && cart.find((item) => item.id === id);
    // 추가
    if (!foundItem) {
      id = Math.max(...session.cart.map((item) => item.id), 0) + 1;
      cart.push({ id, name, price }); // 순수함수는 아님
    } else {
      foundItem.name = name;
      foundItem.price = price;
    }
    setSession({
      ...session,
      cart,
      // cart: [...cart], // 순수함수
    });
  };

  return (
    <SessionContext.Provider
      value={{ session, login, logout, removeItem, saveItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
