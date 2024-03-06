import { PropsWithChildren } from 'react';

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export default async function PhotosLayout({
  children,
  photoview,
}: {
  children: PropsWithChildren;
  photoview: React.ReactNode;
}) {
  return (
    <>
      <header className='bg-sky-200'>Header...</header>
      {photoview}
      {children}
    </>
  );
}
