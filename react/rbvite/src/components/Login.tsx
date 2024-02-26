import {
  FormEvent,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { useSession } from '../contexts/session-context';
import { useCounter } from '../contexts/counter-context';
import { useTimeout } from '../hooks/timeout';
import { useToggle } from '../hooks/toggle';
import { useNavigate } from 'react-router-dom';

// type Props = {
//   login: (id: number, name: string) => void;
// };

export type LoginHandler = {
  noti: (msg: string) => void;
  focusId: () => void;
  focusName: () => void;
};

export const Login = forwardRef((_, ref) => {
  const navigate = useNavigate();
  const { plusCount, minusCount } = useCounter();
  const { login } = useSession();
  // const [id, setId] = useState(0);
  const idRef = useRef<HTMLInputElement | null>(null);
  // const [name, setName] = useState('');
  const nameRef = useRef<HTMLInputElement | null>(null);

  const handler = {
    noti: (msg: string) => alert(msg),
    focusId: () => idRef.current?.focus(),
    focusName: () => nameRef.current?.focus(),
  };

  useImperativeHandle(ref, () => handler);

  const makeLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // submit 기본기능 무력화시킴
    // if (!idRef.current || !idRef.current.value)
    if (!idRef.current?.value) {
      alert('User ID를 입력하세요');
      idRef.current?.focus();
      return;
    }
    if (!nameRef.current?.value) {
      alert('User Name을 입력하세요');
      nameRef.current?.focus();
      return;
    }
    const id = idRef.current.value;
    const name = nameRef.current.value;
    if (login(+id, name ?? '')) navigate('/my');
  };

  useEffect(() => {
    plusCount();
    return () => minusCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useTimeout(() => console.log('X>>', count), 1000, [count]);

  const [isShow, toggle] = useToggle();

  const { clear, reset } = useTimeout(
    () => console.log('isShow>>', isShow),
    1000
  );
  reset();
  // useTimeout(clear, 500);

  return (
    <>
      <button onClick={reset}>Reset</button>
      <button onClick={clear}>Clear</button>

      <button
        onClick={toggle}
        style={{ border: `1px solid ${isShow ? 'red' : 'yellow'}` }}
      >
        {isShow ? 'Hide' : 'Show'}
      </button>
      <form onSubmit={makeLogin}>
        <div>
          <span style={{ margin: '1em' }}>LoginID:</span>
          {/* <input type='text' onChange={(e) => setId(+e.currentTarget.value)} /> */}
          <input type='number' ref={idRef} />
        </div>
        <div>
          LoginName:
          {/* <input type='text' onChange={(e) => setName(e.currentTarget.value)} /> */}
          <input type='text' ref={nameRef} />
        </div>
        {/* <button onClick={() => login(id, name)}>Sign-in</button> */}
        <button type='submit'>Sign-in</button>
      </form>
    </>
  );
});

Login.displayName = 'Login';
