import { useReducer } from 'react';

export const useToggle = (defaultValue: boolean = false) => {
  // const [flag, setFlag] = useState(false);
  const [flag, makeToggle] = useReducer((pre) => !pre, defaultValue);
  return [flag, makeToggle] as const;
};
