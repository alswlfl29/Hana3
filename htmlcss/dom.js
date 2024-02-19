// console.log("DOM.js", div1);
const users = [
  { id: 1, name: "홍길동", tel: "01088889991", addr: "서울" },
  { id: 2, name: "김길동", tel: "01088889992", addr: "부산" },
  { id: 3, name: "이길동", tel: "01088889993", addr: "서울" },
  { id: 4, name: "박길동", tel: "01088889994", addr: "서울" },
];

const COL_IDX = { id: 0, name: 1, tel: 2, addr: 3, btns: 4 };

users.forEach((user) => {
  const row = userTable.insertRow();
  const cells = Array(4);
  for (const [k, v] of Object.entries(user)) {
    cells[COL_IDX[k]] = v;
  }

  cells.forEach((val) => (row.insertCell().innerText = val));
  const btn = document.createElement("button");
  btn.textContent = "DEL";
  btn.addEventListener("click", (evt) => {
    // userTable.deleteRow(idx);
    // evt.currentTarget.parentNode.parentElement.remove(); // 나중에 추가하면 안될 수 있음(냄새나는코드)
    row.remove(); //
  });
  row.insertCell().append(btn);
});

frm.addEventListener("submit", (evt) => {
  console.log("SBM!!!");
});

// btnSubmit.addEventListener("click", (evt) => {
//   evt.preventDafault();
//   console.log("Submit!!");
// });

// div1.addEventListener(
//   "click",
//   (evt) => {
//     console.log("Div1");
//   },
//   false
// );

// div2.addEventListener(
//   "click",
//   (evt) => {
//     console.log("Div2");
//   },
//   { once: true }
// );

// btn.addEventListener(
//   "click",
//   (evt) => {
//     console.log("Button");
//   },
//   false
// );

// const div = document.createElement("div");
// div.innerText = "innerText";
// div.style.backgroundColor = "red";
// div.style.color = "white";

// const span = document.createElement("span");
// div.append(span);
// span.innerHTML = "<br>Span: <strong>strong</strong>";

// document.body.append(div);

// const btn = document.createElement("button");
// btn.textContent = "BTN";
// document.body.append(btn);

// function toUpper(ele) {
//   ele.innerText = ele.innerText.toUpperCase();
// }

// btn.addEventListener("click", (evt) => {
//   // alert("BTN Clicked");
//   const bbb = document.getElementById("li2");
//   toUpper(bbb);
//   const ul = document.querySelector(".bg-yellow");
//   const aaa = ul.firstElementChild;
//   toUpper(aaa);
//   const ccc = ul.lastElementChild;
//   toUpper(ccc);

//   if (div.classList.contains("show")) {
//     div.classList.remove("show");
//     div.classList.add("hide");
//   } else {
//     div.classList.remove("hide");
//     div.classList.add("show");
//   }
// });

// console.log(div.textContent); // 순수하게 텍스트 그 자체
// console.log(div.innerText); // 텍스트 노드(실제로 보여지는 대로)
// console.log(div.innerHTML); // html 텍스트
