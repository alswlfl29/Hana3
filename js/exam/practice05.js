function ex1() {
  console.log("----------연습문제1----------");
  console.log("#1-1. for-in문을 사용하여 배열의 인덱스를 출력하시오.");
  const arr = [100, 200, 300, 400, 500, 600, 700];
  for (let i in arr) console.log(i);

  console.log("#1-2. for-in문을 사용하여 배열의 원소(값)를 출력하시오. (of)");
  for (let i in arr) console.log(arr[i]);

  console.log("#1-3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오.");
  const obj = {
    name: "lim",
    addr: "Yongsan",
    level: 1,
    role: 9,
    receive: false,
  };
  for (let o in obj) console.log(o);

  console.log("#1-4. for-in문을 사용하여 프로퍼티 값을 출력하시오.");
  for (let o in obj) console.log(obj[o]);

  console.log("#1-5. for-of문을 사용하여 프로퍼티 값을 출력하시오.");
  for (let o of Object.values(obj)) console.log(o);
  for (let o of Object.keys(obj)) console.log(obj[o]);

  console.log("#1-6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오.");
  Object.defineProperty(obj, "level", { enumerable: false });
  console.log(Object.getOwnPropertyDescriptor(obj, "level"));

  console.log("#1-7. role 프로퍼티는 읽기전용으로 설정하시오.");
  Object.defineProperty(obj, "role", { writable: false });
}

function ex2() {
  console.log("----------연습문제2----------");
  console.log(
    "#2-1 [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오."
  );
  // const arr2 = [
  //   ["A", 10, 20],
  //   ["B", 30, 40],
  //   ["C", 50, 60, 70],
  // ];
  // function makeObjectFromArray(arr) {
  //   const obj = {};
  //   for (let a of arr) {
  //     const [k, ...v] = a;
  //     obj[k] = v;
  //   }
  //   return obj;
  // }

  // console.log(makeObjectFromArray(arr2));
  const orgArray = [
    ["A", 10, 20],
    ["B", 30, 40],
    ["C", 50, 60, 70],
  ];

  function makeObjectFromArray(arr) {
    const retObj = {};
    for (const [k, ...v] of arr) {
      retObj[k] = v;
    }
    return retObj;
  }

  const newObj = makeObjectFromArray(orgArray);

  console.log("newObj: ", newObj);

  console.log("#2-2 위에서 만든 객체를 다시 배열로 만드시오.");
  // const obj2 = { A: [10, 20], B: [30, 40], C: [50, 60, 70] };
  // function makeArrayFromObject(obj) {
  //   const arr = [];
  //   for (let o of Object.entries(obj)) {
  //     arr.push([o[0], ...o[1]]);
  //   }
  //   return arr;
  // }

  // console.log(makeArrayFromObject(obj2));
  function makeArrayFromObject(obj) {
    const retArr = [];
    for (const k in obj) {
      retArr.push([k, ...obj[k]]);
    }
    return retArr;
  }

  const newArr = makeArrayFromObject(newObj);
  console.log("newArr: ", newArr);
}

function ex3() {
  console.log("----------연습문제3----------");
  console.log(
    "#3 원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 / spread(...) 연산자를 사용하지 말고 작성하시오."
  );
  const kim = { nid: 3, nm: "Hong", addr: "Pusan" };

  function copyObject(obj) {
    const newObj = {};
    for (const k in obj) {
      newObj[k] = obj[k];
    }
    return newObj;
  }
  const newKim = copyObject(kim);
  console.log(newKim);
  newKim.addr = "Daegu";
  console.log(kim.addr !== newKim.addr);
}

ex2();
