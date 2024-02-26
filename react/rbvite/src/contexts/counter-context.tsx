/* eslint-disable react-refresh/only-export-components */
import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';
type CounterContextProp = {
  count: number;
  plusCount: () => void;
  minusCount: (payload?: number) => void;
};

type ReducerAction = { type: string; payload?: number };

// createContext로 context 생성
const CounterContext = createContext<CounterContextProp>({
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
});

enum ACTION {
  plus = 'plus',
  minus = 'minus',
}

const reducer = (count: number, { type, payload = 1 }: ReducerAction) => {
  switch (type) {
    case ACTION.plus:
      return count + 1;
    case ACTION.minus:
      return count - payload;
    default:
      return count;
  }
};

// provider 생성
export const CounterProvider = ({ children }: PropsWithChildren) => {
  // const [count, setCount] = useState(0);
  const [count, dispatcher] = useReducer(reducer, 0);

  const plusCount = () => dispatcher({ type: 'plus' });

  const minusCount = (payload: number = 1) =>
    dispatcher({ type: 'minus', payload });

  // const plusCount = () => setCount((prev) => prev + 1);
  // const minusCount = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider
      value={{
        count,
        // dependent area에 plusCount, minusCount 넣었을 때, count가 변경되면서 리렌더 발생 -> 무한 루프
        // 리렌더 발생 시 메모리 주소가 변경됨(primitive)
        // 이를 방지하기 위해 useCallback 사용 -> useCallback: 함수를 메모이제이션해줌(한 번 실행한거 저장해둠)
        plusCount,
        minusCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

// consumer 생성
// 함수 모양으로 해야함 -> 사용하는 쪽에서 함수로 부르기 때문
export const useCounter = () => useContext(CounterContext);
