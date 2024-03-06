import Image from 'next/image';
import Link from 'next/link';
import { Photo } from '../layout';

const getPhoto = async (photoId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${photoId}`,
    { cache: 'no-store' }
  );
  return res.json();
};

export default async function PhotoId({
  params,
}: {
  params: { photoId: number };
}) {
  const { photoId } = params;
  const { title, url }: Photo = await getPhoto(photoId);
  return (
    <div className='flex flex-col justify-center items-center'>
      <h3 className='text-center text-xl font-bold py-5'>{title}</h3>
      <Image src={url} alt={title} width={600} height={600} />
      <p className='mt-3 float-start'>
        <strong>Title:</strong> {title}
      </p>
      <p className='my-3 float-start'>
        <strong>Url:</strong> {url}
      </p>
      <Link href='/photos'>Go List</Link>
    </div>
  );
}
