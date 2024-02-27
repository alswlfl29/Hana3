import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSession } from '../contexts/session-context';
import { useFetch } from '../hooks/fetch';
import { PostType } from './Post';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const PostLayout = () => {
  const navigate = useNavigate();
  const {
    session: { loginUser },
  } = useSession();

  const {
    data: posts,
    error,
    isLoading,
  } = useFetch<PostType[]>({
    url: `${BASE_URL}/posts?userId=${loginUser?.id}`,
    dependencies: [loginUser],
    defaultValue: [],
  });

  const [currPost, setCurrPost] = useState<PostType | null>(null);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const goPost = (post: PostType) => {
    setCurrPost(post);
    navigate(`/posts/${post.id}`);
  };

  return (
    <>
      <div className='flex'>
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>
              <button
                onClick={() => goPost(post)}
                className='hover:text-blue-300'
              >
                {post.title}
              </button>
            </li>
          ))}
        </ul>
        <div>
          <Outlet context={{ post: currPost }} />
        </div>
      </div>
    </>
  );
};
