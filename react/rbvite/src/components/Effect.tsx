import { useEffect, useRef, useState } from 'react';
// import { useTimer } from '../hooks/time-hooks';

export default function Effect() {
  // const { useTimeout } = useTimer();

  // useTimeout({ cb: () => console.log('X'), timer: 1000 });
  // useTimeout({
  //   cb: (name) => console.log(`Hello, ${name}!!!`),
  //   timer: 1000,
  //   param: ['Hong'],
  // });

  const [count, setCount] = useState(0);

  const hRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!hRef.current) return;
    const pos = hRef.current.getBoundingClientRect();

    hRef.current.style.top = `${pos.bottom + count}px`;
  }, [count]);

  return (
    // <div style={{ marginBottom: '30rem' }}>
    <div>
      {/* <button onClick={() => setIsShow(!isShow)}>Show Effect</button> */}
      <button onClick={() => setCount((prev) => prev + 1)}>Show Effect</button>
      {count && <h1 style={{ position: 'absolute' }}>Article</h1>}
    </div>
    // </div>
  );
}
