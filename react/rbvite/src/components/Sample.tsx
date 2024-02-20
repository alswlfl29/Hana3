import { ChangeEvent, useRef, useState } from 'react';

const CITIES = ['서울', '대전', '대구', '부산', '창원'];

export default function Sample() {
  const [nickname, setNickname] = useState('Hong');
  const [address, setAddress] = useState('서울');
  const [age, setAge] = useState(0);
  const nameChangeCnt = useRef(0);

  const changeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.currentTarget.value);
    nameChangeCnt.current += 1;
  };

  return (
    <>
      <div>
        <h1>Sample</h1>
        <h5>
          Nickname: {nickname}({age}세) - {address}
        </h5>
        <input type='text' value={nickname} onChange={changeNickname} />
        <input
          type='number'
          value={age}
          onChange={(e) => setAge(+e.currentTarget.value)}
        />
        <input
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <select value={address} onChange={(e) => setAddress(e.target.value)}>
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => alert(nameChangeCnt.current)}>TTT</button>
    </>
  );
}
