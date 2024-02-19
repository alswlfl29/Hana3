import { useState } from 'react';
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';

// function H5({ ss }: { ss: string }) {
//   return <h5>H55555566-{ss}</h5>;
// }

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession = {
  // loginUser: null,
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const plusCount = () => setCount(count + 1);
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

  return (
    <>
      <h1>Vite + React</h1>
      {/* <H5 ss='FirstComponent' /> */}
      <My
        session={session}
        login={login}
        logout={logout}
        removeItem={removeItem}
      />
      <Hello name='홍길동' age={count + 30} plusCount={plusCount}>
        Hello-children!!!
      </Hello>
      <div className='card'>
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
