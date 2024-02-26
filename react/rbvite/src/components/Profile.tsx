import { Ref, forwardRef } from 'react';
import { useSession } from '../contexts/session-context';
import { useTimer } from '../hooks/time-hooks';

// type Props = {
//   loginUser: LoginUser;
//   logout: () => void;
// };

export const Profile = forwardRef((_, ref: Ref<HTMLButtonElement>) => {
  const { useTimeout } = useTimer();
  const {
    session: { loginUser },
    logout,
  } = useSession();

  useTimeout({
    cb: (name) => console.log(`Hello, ${name}!!!`),
    timer: 1000,
    param: [loginUser?.name],
  });

  return (
    <>
      <h3>
        #{loginUser?.id}
        {loginUser?.name}
      </h3>
      <button ref={ref} onClick={logout}>
        Sign-out
      </button>
    </>
  );
});

Profile.displayName = 'Profile';
