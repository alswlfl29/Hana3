import CheckBox from '@/components/CheckBox';
import Link from 'next/link';
import { Todo } from '../layout';

const getTodo = async (todoId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  return res.json();
};

export default async function TodoId({
  params,
}: {
  params: { todoId: number };
}) {
  const { todoId } = params;
  const { id, title, completed }: Todo = await getTodo(todoId);
  return (
    <>
      <div className='grid'>
        <div>
          {id}.
          <CheckBox checked={completed} label={title} />
        </div>
      </div>
      <Link href='/todos'>Go List</Link>
    </>
  );
}

// import getTodo from '@/lib/getTodo';

// type Props = {
//   params: { todoId: number };
// };

// export default async function TodoIdPage({ params }: Props) {
//   const res = await getTodo(params.todoId);
//   const datas = await res.json();

//   return (
//     <div className='flex justify-center items-center'>
//       <h3
//         className={
//           datas.completed
//             ? 'line-through text-lg text-orange-500'
//             : 'text-lg text-orange-500'
//         }
//       >
//         {datas.title}
//       </h3>
//     </div>
//   );
// }
