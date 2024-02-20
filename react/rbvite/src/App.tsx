import { useRef, useState } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';

// const H5 = forwardRef(
//   (prop: { ss: string }, ref: ForwardedRef<HTMLInputElement>) => {
//     return (
//       <>
//         <h5>H55555566-{ss}</h5>
//         <button onClick={() => ref.current?.focus()}>Focus InpRef</button>
//       </>
//     );
//   }
// );

export type LoginUser = { id: number; name: string };
export type Cart = { id: number; name: string; price: number };
export type Session = {
  loginUser: LoginUser | null;
  cart: Cart[];
};

const SampleSession = {
  loginUser: null,
  // loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);
  const titleRef = useRef<HTMLHeadingElement>(null);
  // const nextId = useRef(session.cart[session.cart.length - 1].id + 1);
  const inpRef = useRef<HTMLInputElement>(null);

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

  // const addItem = (itemName: string, itemPrice: number) => {
  //   const itemInfo = { id: nextId.current, name: itemName, price: itemPrice };
  //   setSession({
  //     ...session,
  //     cart: session.cart.concat(itemInfo),
  //   });
  //   nextId.current += 1;
  // };

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
    <>
      <h1 ref={titleRef}>Vite + React</h1>
      <input type='text' ref={inpRef} placeholder='inpRef-test' />
      {/* <H5 ss='FirstComponent' ref={inpRef} /> */}
      <My
        session={session}
        login={login}
        logout={logout}
        removeItem={removeItem}
        // addItem={addItem}
        saveItem={saveItem}
      />
      <Hello name='홍길동' age={count + 30} plusCount={plusCount}>
        Hello-children!!!
      </Hello>
      <div className='card'>
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
      </div>
      <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button>
    </>
  );
}

export default App;
