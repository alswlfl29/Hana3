import assert from "assert"; // ESM
// 1) 문자열 str에서 대문자만 골라 소문자로 변환하세요.

const upperToLower = (str) => str.replace(/[A-Z]/g, (s) => s.toLowerCase());
const ss = upperToLower("Senior Coding Learning JS");
console.log("🚀 ~ ss:", ss);
assert.deepStrictEqual(
  upperToLower("Senior Coding Learning JS"),
  "senior coding learning js"
);

// 2) 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
const telfmt = (telStr) => {
  const len = telStr?.length;
  if (len < 7) return telStr;
  if (len <= 8)
    return `${telStr.substring(0, len - 4)}-${telStr.substring(len - 4)}`;

  const a = telStr.startsWith("02") ? 2 : len <= 11 ? 3 : 4;
  const b = len - 4 - a;

  const regex = new RegExp(`(\\d{${a}})(\\d{${b}})(\\d{${4}})`);
  return telStr.replace(regex, "$1-$2-$3");
};

assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
assert.deepStrictEqual(telfmt("1577157"), "157-7157");
assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
assert.deepStrictEqual(telfmt("050712345678"), "0507-1234-5678");
