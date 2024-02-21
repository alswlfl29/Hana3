/* eslint-disable react-refresh/only-export-components */
import { PropsWithChildren, createContext, useContext, useState } from 'react';

type CounterContextProp = {
  count: number;
  plusCount: () => void;
};

// createContext로 context 생성
const CounterContext = createContext<CounterContextProp>({
  count: 0,
  plusCount: () => {},
});

// provider 생성
export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const plusCount = () => setCount((prev) => prev + 1);

  return (
    <CounterContext.Provider value={{ count, plusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// consumer 생성
// 함수 모양으로 해야함 -> 사용하는 쪽에서 함수로 부르기 때문
export const useCounter = () => useContext(CounterContext);
