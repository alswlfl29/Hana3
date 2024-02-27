import { useOutletContext, useParams } from 'react-router-dom';
import { Cart } from '../../contexts/session';
import { ChangeEvent, useEffect, useReducer, useRef, useState } from 'react';
import { useSession } from '../../contexts/session-context';

type Prop = {
  item: Cart;
  toggleEditing: () => void;
};

function ItemRead({ item, toggleEditing }: Prop) {
  return (
    <div>
      <div className='mb-5'>
        상품명: <strong className='font-bold'>{item.name}</strong>
      </div>
      <div className='mb-5'>
        가격:
        <strong className='font-bold'>{item.price.toLocaleString()}원</strong>
      </div>
      <button
        onClick={toggleEditing}
        className='w-20 bg-gray-300 p-2 border rounded-md'
      >
        수정
      </button>
    </div>
  );
}

type Field = 'name' | 'price';

const ItemUpdate = ({ item, toggleEditing }: Prop) => {
  const { saveItem } = useSession();
  const [isDirty, setDirty] = useState(false);

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  const checkDirty = (e: ChangeEvent<HTMLInputElement>) => {
    const inpName: Field = e.currentTarget.name as Field;
    const inpRef = e.currentTarget.name === 'name' ? itemNameRef : itemPriceRef;
    setDirty(inpRef.current?.value !== item[inpName]);
    // setDirty(
    //   itemNameRef.current?.value !== item.name ||
    //     Number(itemPriceRef.current?.value) !== item.price
    // );
  };

  const saveCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    const id = item.id;
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
    toggleEditing();
  };

  useEffect(() => {
    if (itemNameRef.current) itemNameRef.current.value = item.name;
    if (itemPriceRef.current) itemPriceRef.current.value = String(item.price);
  }, [item]);

  return (
    <form
      onSubmit={saveCartItem}
      onReset={toggleEditing}
      className='flex flex-col'
    >
      <input
        type='text'
        name='name'
        placeholder='상품명'
        ref={itemNameRef}
        // defaultValue={item.name}
        className='w-48 border border-gray-500 rounded-sm mb-5 m-auto'
        onChange={checkDirty}
      />
      <input
        type='number'
        name='price'
        placeholder='금액'
        ref={itemPriceRef}
        // defaultValue={item.price}
        className='w-48 border border-gray-500 rounded-sm mb-5 m-auto'
        onChange={checkDirty}
      />
      {isDirty && (
        <div>
          <button
            type='reset'
            className='w-20 bg-gray-300 p-2 border rounded-md m-auto mr-3'
          >
            취소
          </button>
          <button
            type='submit'
            className='w-20 bg-blue-400 p-2 border rounded-md m-auto'
          >
            수정
          </button>
        </div>
      )}
    </form>
  );
};

export const Item = () => {
  const { item: itemData } = useOutletContext<{ item: Cart }>();
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, false);
  const [item, setItem] = useState<Cart>({ id: 0, name: '', price: 0 });
  const { id } = useParams();
  const {
    session: { cart },
  } = useSession();

  useEffect(() => {
    if (!itemData && id && cart.length) {
      setItem(cart.find((cartItem) => cartItem.id === +id)!);
    } else if (itemData) {
      setItem(itemData);
    }
  }, [cart, id, itemData]);

  return (
    <>
      {isEditing ? (
        <ItemUpdate item={item} toggleEditing={toggleEditing} />
      ) : (
        <ItemRead item={item} toggleEditing={toggleEditing} />
      )}
    </>
  );
};
