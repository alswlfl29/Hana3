import { TodoURL } from './getTodos';

export default async function getTodo(todoId: number) {
  const res = await fetch(`${TodoURL}/todos/${todoId}`, {
    cache: 'no-store',
  });
  return res;
}
