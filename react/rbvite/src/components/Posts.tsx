import { useSession } from '../contexts/session-context';
import { Login } from './Login';
import { useFetch } from '../hooks/fetch';
import clsx from 'clsx';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { useTimeout } from '../hooks/timeout';
import { useEffect, useState } from 'react';
import Post, { PostType } from './Post';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function Posts() {
  const {
    session: { loginUser },
  } = useSession();
  // const [posts, setPosts] = useState<PostType[]>([]);
  const { id } = useParams();
  console.log('id>>', id);
  const location = useLocation();
  console.log('location>>', location.state);

  const [searchParams, setSearchParams] = useSearchParams({});
  const q = searchParams.get('q');
  console.log('q>>', q);
  useTimeout(() => setSearchParams({ q: 'qqq' }), 1000);
  const [, setSearchStr] = useState('');

  const {
    data: posts,
    error,
    isLoading,
  } = useFetch<PostType[]>({
    url: `${BASE_URL}/posts?userId=${loginUser?.id}`,
    dependencies: [loginUser],
    defaultValue: [],
  });

  useEffect(() => {
    setSearchStr(q || '');
  }, [q]);

  // const [, toggleReloading] = useToggle();

  // const toggleOpen = (postId: number) => {
  //   const post = posts.find(({ id }) => id === postId)!;
  //   post.isOpen = !post.isOpen;
  //   // setPosts([...posts]); // 정석
  //   toggleReloading(); // 변형 -> 리로드 시킴(DOM 다시 안그림)
  // };

  return (
    <div className='active'>
      {isLoading && <h1>Fetching Posts...</h1>}
      {error && <h3 style={{ color: 'red' }}>Error: {error}</h3>}
      <h3 className={clsx('text-purple-600 font-extrabold')}>
        #{loginUser?.id}`s Posts
      </h3>
      <ul className='un-list'>
        {!loginUser && (
          <>
            <h4>로그인 해 주세요!</h4>
            <Login />
          </>
        )}
        {posts?.map((post) => <Post key={post.id} postData={post} />)}
      </ul>
    </div>
  );
}
