import { useSession } from '../contexts/session-context';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { Login } from './Login';
import { useToggle } from '../hooks/toggle';
import { useFetch } from '../hooks/fetch';
import clsx from 'clsx';

type PostType = {
  useId: number;
  id: number;
  title: string;
  body: string;
  // isOpen: boolean;
};

// Best!!
const Post = ({ post }: { post: PostType }) => {
  const [isOpen, toggleOpen] = useToggle();
  return (
    <li className={clsx({ border: isOpen, 'border-green-500': isOpen })}>
      <strong className={clsx(isOpen && 'text-green-500')}>{post.title}</strong>
      <button onClick={() => toggleOpen()}>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </button>
      {isOpen && <div>{post.body}</div>}
    </li>
  );
};

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default function Posts() {
  const {
    session: { loginUser },
  } = useSession();
  // const [posts, setPosts] = useState<PostType[]>([]);

  const {
    data: posts,
    error,
    isLoading,
  } = useFetch<PostType[]>({
    url: `${BASE_URL}/posts?userId=${loginUser?.id}`,
    dependencies: [loginUser],
    defaultValue: [],
  });

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
        {posts?.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </div>
  );
}
