import { useEffect, useState } from 'react';

type FetchParam<T> = {
  url: string | URL | globalThis.Request;
  options?: RequestInit;
  dependencies?: unknown[];
  defaultValue?: T;
  enable?: boolean;
};

export const baseURL = 'https://jsonplaceholder.typicode.com';

export const useFetch = <T>({
  url,
  options = {},
  dependencies = [],
  defaultValue,
  enable = true,
}: FetchParam<T>) => {
  const [data, setData] = useState<T | undefined>(defaultValue);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    options.signal = controller.signal;

    if (!enable) return;
    (async function () {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(baseURL + url, options);
        if (!res.ok) {
          setError(res.status.toString());
          return;
        }
        const data = (await res.json()) as T;
        setData(data);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name !== 'AbortError') console.log(err.message);
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return { data, error, isLoading };
};
