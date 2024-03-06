// localhost:3000/hello
// a.com/hello
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Hello() {
  // redirect('/hello/morning');
  return (
    <>
      <h1 className='text-lg'>Hello Page</h1>
      <Link href='/'>Go Home</Link>
      <Button variant='outline'>BTN</Button>
    </>
  );
}
