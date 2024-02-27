import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useToggle } from '../hooks/toggle';
import clsx from 'clsx';
import { useFetch } from '../hooks/fetch';
import { useEffect, useState } from 'react';

export type PostType = {
  useId: number;
  id: number;
  title: string;
  body: string;
  // isOpen: boolean;
};

const DefaultPost = {
  useId: 0,
  id: 0,
  title: '',
  body: '',
};

type Props = {
  postId?: number;
  postData?: PostType;
};

// Best!!
// const Post = ({ post }: { post: PostType }) => {
const Post = ({ postId, postData }: Props) => {
  const [post, setPost] = useState<PostType | null>(DefaultPost);
  const [isOpen, toggleOpen] = useToggle();

  const { data, error, isLoading } = useFetch<PostType>({
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
    defaultValue: DefaultPost,
    enable: !!postId,
  });

  useEffect(() => {
    if (postData) {
      setPost(postData);
      return;
    }
    if (data) {
      setPost(data);
      return;
    }
  }, [data, postData]);

  if (error) {
    return <h1 className='text-red-700 font-bold'>{error}</h1>;
  }

  return (
    <>
      {isLoading ? (
        <h1>isLoading...</h1>
      ) : (
        <li className={clsx({ border: isOpen, 'border-green-500': isOpen })}>
          <strong className={clsx(isOpen && 'text-green-500')}>
            {post?.title}
          </strong>
          <button onClick={() => toggleOpen()}>
            {isOpen ? <FaAngleUp /> : <FaAngleDown />}
          </button>
          {isOpen && <div>{post?.body}</div>}
        </li>
      )}
    </>
  );
};

export default Post;
