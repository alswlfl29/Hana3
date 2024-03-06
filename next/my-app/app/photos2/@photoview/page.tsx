import Image from 'next/image';
import Link from 'next/link';
import { Photo } from '../layout';

const getPhotos = async (albumId = 1) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
    { cache: 'no-store' }
  );
  return res.json();
};

export default async function PhotosViewPage() {
  const photos: Photo[] = await getPhotos(1);
  return (
    <>
      <h1 className='text-center text-2xl font-bold py-5'>Photos</h1>
      <ul className='grid grid-cols-6 gap-3'>
        {photos.map(({ id, title, thumbnailUrl }) => (
          <li key={id}>
            <Link href={`/photos/${id}`}>
              <Image src={thumbnailUrl} alt={title} width={150} height={150} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
