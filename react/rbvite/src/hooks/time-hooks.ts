import { useEffect } from 'react';

type TimeoutProps = {
  cb: (name?: string) => void;
  timer: number;
  param?: [string | undefined];
};

export const useTimer = () => {
  const useTimeout = ({ cb, timer, param }: TimeoutProps) => {
    useEffect(() => {
      const tmout = setTimeout(cb, timer, param);

      return () => clearTimeout(tmout);
    }, []);
  };

  return { useTimeout };
};
