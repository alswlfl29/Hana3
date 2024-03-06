import { PropsWithChildren } from 'react';

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function TodoLayout({ children }: PropsWithChildren) {
  return (
    <>
      <h1>Todos</h1>
      {children}
    </>
  );
}

// export default async function TodoLayout({ children }: PropsWithChildren) {
//   const res = await getTodos(1);
//   const datas = await res.json();
//   return (
//     <div className='flex gap-20'>
//       <div>
//         <h1 className='text-2xl font-bold text-center mb-3'>TODO List</h1>
//         <ul className='border border-dotted border-blue-600 text-center'>
//           {datas.map((data: any) => (
//             <li key={data.id} className='list-none mb-2'>
//               <Link href={`/todos/${data.id}`}>
//                 {data.id}. {data.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {children}
//     </div>
//   );
// }
