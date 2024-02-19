/**
 * 3. TypeScript - 객체 정의
 *    (다음 오렌지 박스 부분을 파일 또는 소스로 제공하면 됨) (총 25점)
 */
interface Naver {
  userid: number;
  username: string;
  email: string;
}
interface Kakao {
  userid: number;
  userName: string;
  kakaotalk: string;
  email: string;
}

interface SnsUser {
  [id: string]: number | string;
  userid: number;
  email: string;
}

// 다음 코드에 오류가 없으면 통과!
const naverUser: SnsUser = {
  userid: 1,
  username: "HH",
  email: "abc@naver.com",
};

const kakaoUser: SnsUser = {
  userid: 1,
  userName: "HH",
  kakaotalk: "HH",
  email: "abc@hanmail.net",
};
