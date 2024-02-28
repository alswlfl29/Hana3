import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSession } from '../../contexts/session-context';
import { useEffect, useRef, useState } from 'react';
import { Cart } from '../../contexts/session';
import { Input } from '../ui/Input';

export const ItemEdit = () => {
  const {
    session: { cart },
    saveItem,
  } = useSession();
  const [item, setItem] = useState<Cart | null | undefined>(null);
  const [isDirty, setDirty] = useState(false);
  const [query] = useSearchParams();
  const itemId = query.get('itemId');
  const navigate = useNavigate();

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const checkDirty = () => {
    setDirty(
      itemNameRef.current?.value !== item?.name ||
        Number(itemPriceRef.current?.value) !== item?.price
    );
  };

  const saveCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    const id = item?.id || 0;
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
    saveItem({ id, name, price });
    goToDetailPage();
  };

  const goToDetailPage = () => {
    navigate(`/v2/items/${itemId}`); // 절대경로
    // navigate(`../${itemId}`); // 상대경로
  };

  useEffect(() => {
    if (itemNameRef.current) itemNameRef.current.value = item?.name || '';
    if (itemPriceRef.current) itemPriceRef.current.value = String(item?.price);
    itemNameRef.current?.select();
  }, [item]);

  useEffect(() => {
    setItem(cart.find((item) => item.id === Number(itemId)));
  }, [itemId, cart]);

  if (!itemId) return <>{navigate(-1)}</>;

  if (!item) return <h1>${itemId} is Not Found!!</h1>;

  return (
    <>
      <form
        onSubmit={saveCartItem}
        onReset={goToDetailPage}
        className='border p-5 mt-3'
      >
        <Input
          type='text'
          name='name'
          // ref={itemNameRef}
          defaultValue={item.name || ''}
          placeholder='상품명..'
          onChange={checkDirty}
        />

        <Input
          type='text'
          name='price'
          // ref={itemPriceRef}
          defaultValue={item.price || 0}
          placeholder='금액..'
          onChange={checkDirty}
        />

        <div className='p-5'>
          <button type='reset' className='mx-5'>
            취소
          </button>
          {isDirty && (
            <button type='submit' className='btn-primary'>
              저장
            </button>
          )}
        </div>
      </form>
    </>
  );
};
