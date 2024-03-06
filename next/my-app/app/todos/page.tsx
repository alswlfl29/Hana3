import clsx from 'clsx';
import Link from 'next/link';
import { Todo } from './layout';

const getTodos = async (userId = 1) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${userId}`,
    { cache: 'no-store' }
  );
  return res.json();
};

export default async function TodosPage() {
  const todos: Todo[] = await getTodos(1);
  return (
    <>
      <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id} className={clsx({ 'line-through': completed })}>
            <Link href={`/todos/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
