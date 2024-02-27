import { useNavigate } from 'react-router-dom';
import { useTimeout } from './hooks/timeout';

export const NotFound = () => {
  const navigate = useNavigate();

  useTimeout(() => navigate('/posts/3?q=abc#a', { state: { x: 9 } }), 2000);
  return (
    <h1>
      <strong className='text-red-500'>{location.pathname}</strong> Page Not
      Found(404)
    </h1>
  );
  // return <Navigate to='/' />;
};
