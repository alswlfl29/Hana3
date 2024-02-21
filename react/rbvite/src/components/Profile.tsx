import { Ref, forwardRef } from 'react';
import { useSession } from '../contexts/session-context';

// type Props = {
//   loginUser: LoginUser;
//   logout: () => void;
// };

export const Profile = forwardRef((_, ref: Ref<HTMLButtonElement>) => {
  const {
    session: { loginUser },
    logout,
  } = useSession();
  return (
    <>
      <h3>{loginUser?.name}</h3>
      <button ref={ref} onClick={logout}>
        Sign-out
      </button>
    </>
  );
});

Profile.displayName = 'Profile';
