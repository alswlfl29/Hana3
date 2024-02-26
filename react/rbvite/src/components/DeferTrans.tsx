import {
  ChangeEvent,
  useEffect,
  // useDeferredValue,
  useState,
  useTransition,
} from 'react';

type List = {
  id: number;
  value: string;
};

const useDebounce = (
  cb: () => void,
  delay: number,
  dependencies: unknown[] = []
) => {
  useEffect(() => {
    const timer = setTimeout(cb, delay);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
};

export default function DeferTrans() {
  const [searchStr, setSearchStr] = useState('');
  // const deferredSearchStr = useDeferredValue(searchStr);
  const [list, setList] = useState<List[]>([]);
  const [debounceStr, setDebounceStr] = useState('');

  const [isPending, startTransition] = useTransition();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchStr(value);
    startTransition(() => {
      const lst = [];
      for (let i = 0; i < 1000; i += 1) {
        // lst.push({ id: i + 1, value: deferredSearchStr });
        lst.push({ id: i + 1, value });
      }
      setList(lst);
    });
  };

  useDebounce(
    () => {
      console.log('************>>', searchStr);
      setDebounceStr(searchStr);
    },
    500,
    [searchStr]
  );

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('************>>', searchStr);
  //     setDebounceStr(searchStr);
  //   }, 500);

  //   return () => clearTimeout(timer);
  // }, [searchStr]);

  return (
    <>
      <input
        type='text'
        onChange={handleChange}
        className='border border-red-500 rounded-lg'
      />
      {/* <h2 className='text-lg text-blue-500'>{deferredSearchStr}</h2> */}
      <h2 className='text-lg text-blue-500'>{searchStr}</h2>
      <h2 className='text-lg text-blue-500'>{debounceStr}</h2>

      {isPending && <h1 className='text-lg'>Loading...</h1>}
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
}
