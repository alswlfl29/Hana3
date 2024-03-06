import { Photo } from '@/app/photos2/layout';
import Modal from '@/components/Modal';
import Image from 'next/image';

const getPhoto = async (photoId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${photoId}`,
    { cache: 'no-store' }
  );
  return res.json();
};

export default async function PhotoInterceptor({
  params,
}: {
  params: { photoId: number };
}) {
  const { photoId } = params;
  const { title, url }: Photo = await getPhoto(photoId);

  return (
    <Modal>
      <div className='bg-white'>
        <Image src={url} alt={title} width={600} height={600} />
        <p className='p-3 font-semibold'>{title}</p>
      </div>
    </Modal>
  );
}
