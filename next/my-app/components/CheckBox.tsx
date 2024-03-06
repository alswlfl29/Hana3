'use client';

import { useReducer } from 'react';

export default function CheckBox({
  checked,
  label,
}: {
  checked: boolean;
  label: string;
}) {
  const [isChecked, toggle] = useReducer((prev) => !prev, checked);
  const checkId = 'xxx';
  return (
    <div>
      <input
        id={checkId}
        type='checkbox'
        checked={isChecked}
        onChange={toggle}
      />
      <label htmlFor={checkId}>{label}</label>
    </div>
  );
}
