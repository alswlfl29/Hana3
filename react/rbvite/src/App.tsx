import { Ref, createRef, forwardRef, useRef } from 'react';
import './App.css';
import { Hello } from './components/Hello';
import My from './components/My';
import { useCounter } from './contexts/counter-context';
import { SessionProvider } from './contexts/session-context';

const H5 = forwardRef(({ ss }: { ss: string }, ref: Ref<HTMLInputElement>) => {
  return (
    <div style={{ border: '1px solid skyblue', marginBottom: '0.5rem' }}>
      <h5>H5555555-{ss}</h5>
      <input type='text' ref={ref} placeholder='child-input' />
    </div>
  );
});
H5.displayName = 'H5'; // displayName을 줘야지 화살표함수가 컴포넌트로 취급되어짐

function App() {
  const { count, plusCount } = useCounter();

  const titleRef = useRef<HTMLHeadingElement>(null);
  // const nextId = useRef(session.cart[session.cart.length - 1].id + 1);
  const childInputRef = createRef<HTMLInputElement>();
  const logoutBtnRef = createRef<HTMLButtonElement>();

  // const addItem = (itemName: string, itemPrice: number) => {
  //   const itemInfo = { id: nextId.current, name: itemName, price: itemPrice };
  //   setSession({
  //     ...session,
  //     cart: session.cart.concat(itemInfo),
  //   });
  //   nextId.current += 1;
  // };

  return (
    <>
      <h1 ref={titleRef}>Vite + React</h1>
      <H5 ss='FirstComponent' ref={childInputRef} />
      <button
        onClick={() => {
          if (childInputRef.current) {
            childInputRef.current.focus();
            childInputRef.current.value = 'XXXX';
          }
        }}
      >
        Call
      </button>
      <button onClick={() => logoutBtnRef.current?.click()}>Sign-Out</button>

      <SessionProvider>
        <My ref={logoutBtnRef} />
        <Hello name='홍길동'>Hello-children!!!</Hello>
      </SessionProvider>

      <div className='card'>
        <button onClick={plusCount}>count is {count}</button>
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
