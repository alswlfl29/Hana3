const users = [
  { id: 1, name: "홍길동", tel: "01088889991", addr: "서울" },
  { id: 2, name: "김길동", tel: "01088889992", addr: "부산" },
  { id: 3, name: "이길동", tel: "01088889993", addr: "서울" },
  { id: 4, name: "박길동", tel: "01088889994", addr: "서울" },
];

const table = document.getElementById("mytable");

users.map((user) => {
  const row = table.insertRow(user.id);
  const cellId = row.insertCell(0);
  const cellName = row.insertCell(1);
  const cellTel = row.insertCell(2);
  const cellAddr = row.insertCell(3);
  const cellBtn = row.insertCell(4);
  cellId.innerHTML = user.id;
  cellName.innerHTML = user.name;
  cellTel.innerHTML = user.tel;
  cellAddr.innerHTML = user.addr;
  cellBtn.innerHTML = `<button onClick='deleteFn(this)'>삭제</button>`;
});

const deleteFn = (r) => {
  const i = r.parentNode.parentNode.rowIndex;
  document.getElementById("mytable").deleteRow(i);
};
