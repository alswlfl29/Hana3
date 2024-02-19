new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("timeout");
    // resolve("xxx");
    reject(new Error("ERROR!!"));
  }, 1000);
})
  .then((res) => {
    console.log("THEN!", res);
    return "TTT";
  })
  .catch((err) => {
    console.log({ err });
    return "EEE";
  })
  .finally((retF) => console.log("finally!!!", retF));

// try {
//   console.log("inner try");
// } catch (err) {
//   console.error({ err });
// } finally {
//   console.log("finally");
// }

// import assert from "assert"; // ESM
// const s = ["강원도 고성군", "고성군 토성면", "토성면 북면", "북면", "김1수"];

// const ㄱㄴㄷ = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
// const 가나다 = "가까나다따라마바빠사싸아자짜차카타파하힣"; // 힣은 outofindex 처리

// const searchByInitialSound = (data, initSounds) => {
//   // is.replaceAll("ㄱ", "[ㄱ가-깋]").replaceAll("ㄴ", "[ㄴ나-닣]");
//   const regexps = [...initSounds].map((c) => {
//     const idx = ㄱㄴㄷ.indexOf(c);
//     if (idx === -1) return c;
//     const S = 가나다.at(idx);
//     const endCode = 가나다.at(idx + 1).charCodeAt(0);
//     const E = String.fromCharCode(c === "ㅎ" ? endCode : endCode - 1);

//     // @ToDo ㅎ 처리!
//     return `[${c}${S}-${E}]`;
//   });
//   const regex = new RegExp(regexps.join(""));
//   return data.filter((d) => regex.test(d));
// };

// // const results = searchByKoreanInitialSound(s, "ㄱㅅ");
// //                                          [isS-E]
// // const results = s.filter((s) => s.match(/[ㄱ가-깋][ㅅ시-싷]/));
// // console.log("🚀 ~ results:", results);
// assert.deepStrictEqual(searchByInitialSound(s, "ㄱㅇ"), ["강원도 고성군"]);
// assert.deepStrictEqual(searchByInitialSound(s, "ㄱㅅㄱ"), [
//   "강원도 고성군",
//   "고성군 토성면",
// ]);
// assert.deepStrictEqual(searchByInitialSound(s, "ㅌㅅㅁ"), [
//   "고성군 토성면",
//   "토성면 북면",
// ]);
// assert.deepStrictEqual(searchByInitialSound(s, "ㅂㅁ"), [
//   "토성면 북면",
//   "북면",
// ]);
// assert.deepStrictEqual(searchByInitialSound(s, "ㅍㅁ"), []);
// assert.deepStrictEqual(searchByInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);
