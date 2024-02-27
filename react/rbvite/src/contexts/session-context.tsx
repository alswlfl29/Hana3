/* eslint-disable react-refresh/only-export-components */
import {
  ReactNode,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  // useMemo,
  useReducer,
} from 'react';
import { ItemHandler } from '../components/My';
import { Session, Cart, LoginUser } from './session';
import { useFetch } from '../hooks/fetch';

type SessionContextProp = {
  session: Session;
  totalPrice: number;
  login: (id: number, name: string) => boolean;
  logout: () => void;
  removeItem: (itemId: number) => void;
  saveItem: ({ id, name, price }: Cart) => void;
};

const SessionContext = createContext<SessionContextProp>({
  session: {
    loginUser: null,
    cart: [],
  },
  totalPrice: 0,
  login: () => false,
  logout: () => {},
  removeItem: () => {},
  saveItem: () => {},
});

type ProviderProps = {
  children: ReactNode;
  myHandlerRef?: RefObject<ItemHandler>;
};

// as로 하게 되어 별로 좋지 않음
// type Action = {
//   type: 'set' | 'login' | 'logout' | 'saveItem' | 'removeItem';
//   payload?: Session | LoginUser | Cart | number;
// };

// const reducer = (session: Session, { type, payload }: Action) => {
//   switch (type) {
//     case 'set':
//       return { ...payload };
//     case 'login':
//       return { ...session, loginUser: payload as LoginUser };
//     default:
//       return session;
//   }
// };

type Action =
  | {
      type: 'login' | 'logout';
      payload: LoginUser | null;
    }
  | { type: 'set'; payload: Session }
  | { type: 'saveItem'; payload: Cart }
  | { type: 'removeItem'; payload: number };

const reducer = (session: Session, { type, payload }: Action) => {
  switch (type) {
    case 'set':
      return { ...payload };

    case 'login':
    case 'logout':
      localStorage.setItem('loginUser', JSON.stringify(payload));
      return { ...session, loginUser: payload };

    case 'saveItem': {
      const { id, name, price } = payload;
      const { cart } = session;
      const foundItem = id !== 0 && cart.find((item: Cart) => item.id === id);
      if (!foundItem) {
        const maxId = Math.max(...session.cart.map((item: Cart) => item.id), 0);
        // cart.push({ id: maxId + 1, name, price }); // 순수함수는 아님(reducer로 가는 순간 2번 호출)
        const addCart = [...cart, { id: maxId + 1, name, price }];
        localStorage.setItem('cart', JSON.stringify(addCart));
        return { ...session, cart: addCart }; // 순수함수
      } else {
        foundItem.name = name;
        foundItem.price = price;
        localStorage.setItem('cart', JSON.stringify([...cart]));
        return { ...session, cart: [...cart] }; // 같은 메모리에 2번 적용
      }
    }

    case 'removeItem': {
      const removeCart = session.cart.filter((item) => item.id !== payload);
      localStorage.setItem('cart', JSON.stringify(removeCart));
      return {
        ...session,
        cart: removeCart,
      };
    }

    default:
      return session;
  }
};

// export const SessionProvider = ({ children }: PropsWithChildren) => {
export const SessionProvider = ({ children }: ProviderProps) => {
  // const [session, setSession] = useState<Session>({
  //   loginUser: null,
  //   cart: [],
  // });
  const [session, dispatch] = useReducer(reducer, {
    loginUser: null,
    cart: [],
  });

  const totalPrice = useMemo(
    () => session.cart.reduce((sum: number, item: Cart) => sum + item.price, 0),
    [session.cart]
  );

  const login = useCallback((id: number, name: string) => {
    // const loginNoti = myHandlerRef?.current?.loginHandler.noti || alert;
    // console.log('🚀  loginNoti:', loginNoti);

    // const focusId = myHandlerRef?.current?.loginHandler.focusId;
    // const focusName = myHandlerRef?.current?.loginHandler.focusName;

    // setSession({ ...session, loginUser: { id, name } });

    dispatch({
      type: 'login',
      payload: { id, name },
    });
    return true;
  }, []);

  const logout = useCallback(() => {
    dispatch({
      type: 'logout',
      payload: null,
    });
    // setSession({ cart: [...session.cart], loginUser: null });
    // session.loginUser = null; // 이러면 virtualDom이 모름
  }, []);

  const removeItem = useCallback((itemId: number) => {
    // setSession({
    //   ...session,
    //   // cart: [...session.cart.filter((item) => item.id !== itemId)],
    //   cart: session.cart.filter((item) => item.id !== itemId),
    // });
    dispatch({
      type: 'removeItem',
      payload: itemId,
    });
    // 제일 많이 사용되는 방식이지만, 세션이 크다면 좀 무거움 -> 전부 바뀔거냐
    // setSession({
    //   ...session,
    //   cart: ,
    //   // cart: session.cart.filter((item) => item.id !== itemId), // 성능 면에서는 좋음..?
    // });
    // callByreference -> 부분만 바뀔거냐의 차이 -> 이렇게 사용하면 리렌더가 안일어남
    // Virtual-DOM의 rerender() 호출 안함(:session의 주소는 안변했으니까!)
    // session.cart = session.cart.filter((item) => item.id !== itemId);
  }, []);

  // add(id===0) or modify(id!==0) item
  const saveItem = useCallback(({ id, name, price }: Cart) => {
    // const { cart } = session;
    // const foundItem = id !== 0 && cart.find((item: Cart) => item.id === id);
    // if (!foundItem) {
    //   id = Math.max(...session.cart.map((item: Cart) => item.id), 0) + 1;
    //   cart.push({ id, name, price }); // 순수함수는 아님
    // } else {
    //   foundItem.name = name;
    //   foundItem.price = price;
    // }
    // setSession({
    //   ...session,
    //   // cart,
    //   cart: [...cart],
    // });
    dispatch({
      type: 'saveItem',
      payload: { id, name, price },
    });
  }, []);

  // 이곳에서 DB에 저장해주어야지 메모리 낭비 발생 X
  // useEffect(()=>fetchToSave(), [session.cart])

  const { data } = useFetch<Session>({ url: '/data/sample.json' });
  // 리렌더시 계속 발생됨 -> useEffect 사용하여 1번만 발생
  useEffect(() => {
    if (data) {
      dispatch({ type: 'set', payload: data });
      localStorage.setItem('loginUser', JSON.stringify(data.loginUser));
      localStorage.setItem('cart', JSON.stringify(data.cart));
    }
  }, [data]);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   const { signal } = controller;
  //   // IIF
  //   (async function () {
  //     const res = await fetch('./data/sample.json', { signal });
  //     const data = (await res.json()) as Session;
  //     // setSession(data);
  //     dispatch({ type: 'set', payload: data });
  //   })();

  //   return () => {
  //     //controller.abort();
  //   };

  //   // const setDefaultSession = async () => {
  //   //   const res = await fetch('./data/sample.json');
  //   //   const data = await res.json();
  //   //   setSession(data);
  //   // };

  //   // setDefaultSession();
  // }, []);

  return (
    <SessionContext.Provider
      value={{ session, totalPrice, login, logout, removeItem, saveItem }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
