import { FormEvent, forwardRef, useImperativeHandle, useRef } from 'react';
import { useSession } from '../contexts/session-context';

// type Props = {
//   login: (id: number, name: string) => void;
// };

export type LoginHandler = {
  noti: (msg: string) => void;
  focusId: () => void;
  focusName: () => void;
};

export const Login = forwardRef((_, ref) => {
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
    login(+id, name);
  };
  return (
    <>
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
