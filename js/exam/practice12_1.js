import assert from "assert"; // ESM
// 1) 문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오.
const ㄱ = "ㄱ".charCodeAt(0);
const ㅎ = "ㅎ".charCodeAt(0);
const 가 = "가".charCodeAt(0);

const JAUM_ALPHA_NUMS = "limMnNrR013678";
const x = [..."limMnNrR013678"].map((s) => s.charCodeAt(0));

const isEndJaum = (str) => {
  const s = str.charCodeAt(str.length - 1);
  if (JAUM_ALPHA_NUMS.includes(s)) return true;
  // if (s >= 12623 && s <= 12643) return false;
  if (s >= ㄱ && s <= ㅎ) return true;
  if ((s - 가) % 28 > 0) return true;
  return false;
};
// for (let i = 12593; i <= 12622; i++) console.log(i, String.fromCharCode(i));

assert.strictEqual(isEndJaum("강원도"), false);
assert.strictEqual(isEndJaum("바라당"), true);
assert.strictEqual(isEndJaum("ㅜㅜ"), false);
assert.strictEqual(isEndJaum("케잌"), true);
assert.strictEqual(isEndJaum("점수 A"), false);
assert.strictEqual(isEndJaum("24"), false);

// 2) 조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.
const josa = (str, josaStr) => {
  const [mo, ja] = josaStr.split("/");
  return isEndJaum(str) ? mo : ja;
};

const iga = (str) => josa(str, "이/가");
const eunun = (str) => josa(str, "은/는");
const eulul = (str) => josa(str, "을/를");
const iuya = (str) => josa(str, "이어야/여야");
const ilang = (str) => josa(str, "이랑/랑");

assert.strictEqual(`강원도${iga("강원도")}`, "강원도가");
