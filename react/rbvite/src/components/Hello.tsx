import { PropsWithChildren } from 'react';
import { useCounter } from '../contexts/counter-context';
import { useSession } from '../contexts/session-context';

type Props = {
  name?: string;
  // children: React.ReactNode;
  // children: React.ReactElement;
};
// export const Hello: React.FC<Props> = ({ name, age, plusCount, children }) => {

export const Hello = ({ children }: PropsWithChildren<Props>) => {
  const { session } = useSession();
  const { count: age, plusCount, minusCount } = useCounter();

  const name = session.loginUser?.name || 'Guest';
  return (
    <div style={{ border: '1px solid green' }}>
      <h3>
        Hello, {name} ({age})
      </h3>
      <button onClick={plusCount}>Plus Age</button>

      <button onClick={() => minusCount()}>Minus Age</button>
      <div>{children}</div>
    </div>
  );
};
