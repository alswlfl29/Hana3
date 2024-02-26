import { Ref, forwardRef, useRef, useState } from 'react';
import { Cart } from '../contexts/session';
import { Login, LoginHandler } from './Login';
import { Profile } from './Profile';
import { useSession } from '../contexts/session-context';

// type Props = {
//   session: Session;
//   login: (id: number, name: string) => void;
//   logout: () => void;
//   removeItem: (itemId: number) => void;
//   // addItem: (itemName: string, price: number) => void;
//   saveItem: (item: Cart) => void;
// };

export type ItemHandler = {
  loginHandler: Partial<LoginHandler>;
};

const My = forwardRef((_, ref: Ref<HTMLButtonElement>) => {
  // const itemIdRef = useRef(0);
  const [currId, setCurrId] = useState(0);
  const {
    session: { loginUser, cart },
    totalPrice,
    removeItem,
    saveItem,
  } = useSession();

  const itemNameRef = useRef<HTMLInputElement>(null);
  const itemPriceRef = useRef<HTMLInputElement>(null);

  // const loginHandlerRef = useRef<LoginHandler>(null);

  // const itemHandler: ItemHandler = {
  //   loginHandler: {
  //     noti: loginHandlerRef.current?.noti,
  //     focusId: loginHandlerRef.current?.focusId,
  //     focusName: loginHandlerRef.current?.focusName,
  //   },
  // };

  // const addItemList = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!itemNameRef.current?.value) {
  //     alert('제품명을 입력하세요');
  //     itemNameRef.current?.focus();
  //     return;
  //   } else if (!itemPriceRef.current?.value) {
  //     alert('가격을 입력해주세요');
  //     itemPriceRef.current?.focus();
  //     return;
  //   }
  //   const itemName = itemNameRef.current.value;
  //   const itemPrice = itemPriceRef.current.value;

  //   addItem(itemName, +itemPrice);
  // };

  const saveCartItem = (e: React.FormEvent) => {
    e.preventDefault();
    // const id = itemIdRef.current;
    const id = currId;

    const name = itemNameRef.current?.value;
    const price = Number(itemPriceRef.current?.value);

    // if (!name || isNaN(price) || !price) {
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

    // itemIdRef.current = 0;
    setCurrId(0);

    itemNameRef.current.value = '';
    if (itemPriceRef.current) itemPriceRef.current.value = '0';
  };

  return (
    <div
      style={{
        border: '2px solid red',
        marginBottom: '2rem',
        padding: '1rem',
      }}
    >
      {loginUser ? <Profile ref={ref} /> : <Login />}
      <ul className='un-list'>
        {/* {cart.map((item: Cart) => (
          <li key={item.id}>
            {item.name} ({item.price.toLocaleString()}원)
          </li>
        ))} */}
        {cart.map(({ id, name, price }: Cart) => (
          <li
            key={id}
            className={`pointer ${currId === id ? 'active' : ''}`}
            onClick={() => {
              // itemIdRef.current = id;
              setCurrId(id);
              if (itemNameRef.current) itemNameRef.current.value = name;
              if (itemPriceRef.current)
                itemPriceRef.current.value = price.toString();
            }}
            aria-hidden='true'
          >
            {/* <button onClick={() => {}}> */}({id}){name} (
            {price.toLocaleString()}원)
            {/* </button> */}
            <button
              title={`removeItem(${id})`}
              onClick={(e) => {
                e.stopPropagation();
                removeItem(id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <div className='font-bold text-red-600'>총금액:{totalPrice}</div>
      <form
        onSubmit={saveCartItem}
        onReset={
          () => setCurrId(0)
          // (itemIdRef.current = 0)
        }
      >
        <input type='text' placeholder='상품명' ref={itemNameRef} />
        <input type='number' placeholder='금액' ref={itemPriceRef} />
        <button type='reset'>취소</button>
        <button type='submit'>{currId ? '수정' : '완료'}</button>
        {/* <button type='submit'>저장</button> */}
      </form>
    </div>
  );
});

My.displayName = 'My';
export default My;
