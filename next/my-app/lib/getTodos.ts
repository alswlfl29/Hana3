export const TodoURL = 'https://jsonplaceholder.typicode.com';

export default async function getTodos(userId: number) {
  const res = await fetch(`${TodoURL}/todos?userId=${userId}`, {
    cache: 'no-store',
  });
  return res;
}
