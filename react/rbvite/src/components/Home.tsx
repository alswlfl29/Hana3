import { createRef, useRef } from 'react';
import { useCounter } from '../contexts/counter-context';
import { H5 } from './H5';
import MouseCapture from './MouseCapture';

export const Home = () => {
  const { count, plusCount } = useCounter();

  const childInputRef = createRef<HTMLInputElement>();
  const titleRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <h1 ref={titleRef}>Vite + React</h1>
      <MouseCapture />
      <H5 ss='FirstComponent' ref={childInputRef} />
      <button
        onClick={() => {
          if (childInputRef.current) {
            childInputRef.current.focus();
            childInputRef.current.value = 'XXXX';
          }
        }}
      >
        Call H5 input
      </button>

      <div className='card'>
        <button onClick={plusCount}>count is {count}</button>
      </div>
      {/* <button
        onClick={() => titleRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Go to the Top
      </button> */}
    </>
  );
};
