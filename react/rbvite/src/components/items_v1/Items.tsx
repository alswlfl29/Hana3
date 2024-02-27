import { useRef } from 'react';
import { useSession } from '../../contexts/session-context';

export const Items = () => {
  const { saveItem } = useSession();
  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const saveCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    const name = itemNameRef.current?.value;
    const price = Number(itemPriceRef.current?.value);

    if (!name) {
      alert('상품명을 정확히 입력하세요');
      itemNameRef.current?.focus();
      return;
    } else if (isNaN(price) || !price) {
      alert('가격을 정확히 입력하세요');
      itemPriceRef.current?.focus();
      return;
    }
    saveItem({ id: 0, name, price });

    itemNameRef.current.value = '';
    if (itemPriceRef.current) itemPriceRef.current.value = '0';
  };

  return (
    <form onSubmit={saveCartItem} className='flex flex-col'>
      <input
        type='text'
        placeholder='상품명'
        ref={itemNameRef}
        className='w-48 border border-gray-500 rounded-sm mb-5 m-auto'
      />
      <input
        type='number'
        placeholder='금액'
        ref={itemPriceRef}
        className='w-48 border border-gray-500 rounded-sm mb-5 m-auto'
      />
      <button
        type='submit'
        className='w-20 bg-gray-300 p-2 border rounded-md m-auto'
      >
        추가
      </button>
    </form>
  );
};
