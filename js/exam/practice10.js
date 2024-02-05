/* 다음과 같이 부서와 직원 객체가 있을 때, deptMap과 empDept를 만들고,  
    개발팀 직원 이름 목록을 출력하시오. (key: id)
*/

const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];

const deptMap = new Map(depts.map((dept) => [dept.id, dept]));
console.log(deptMap); // Map(2) { 1 => { id: 1, dname: '인사팀' }, 2 => { id: 2, dname: '개발팀' } }  ⇐ deptMap.get(2)

const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

const empMap = new Map(emps.map((emp) => [emp.id, emp]));
console.log(empMap); // console.log(empMap); // Map(2) { 1 => {id: 1, name: 'Hong', dept: 1}, 2 => {id: 2, name: 'Kim', dept: 2}, … }

const empDept = new Map(
  emps.map(({ id, name, dept }) => [{ id, name }, deptMap.get(dept)])
);
const xx = emps.map((emp) => [
  { id: emp.id, name: emp.name },
  deptMap.get(emp.dept),
]);
console.log("🚀 ~ xx:", xx);
const yy = emps.map(({ id, name, dept }) => [{ id, name }, deptMap.get(dept)]);
console.log("🚀 ~ yy:", yy);

console.log(empDept); // Map(4) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' }, { id: 3, name: 'Park' } => { id: 2, dname: '개발팀' }, { id: 4, name: 'Choi' } => { id: 2, dname: '개발팀' } }
console.log(empDept.get("Kim")); // '개발팀'

/*
  이전 Array.prototype에 Set을 이용하여 uniqBy() 함수도 추가하시오.
*/
Object.defineProperties(Array.prototype, {
  first: {
    get: function () {
      return;
    },
  },
  last: {
    get: function () {
      return;
    },
  },
});
const hong_1 = { id: 1, name: "Hong", dept: "HR" };
const kim_1 = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };

Array.prototype.uniqBy = function (prop) {
  return [...new Set(this.map((user) => user[prop]))];
};

Array.prototype.filterBy = function (prop, value) {
  return this.filter((item) => item[prop] === value);
};

Array.prototype.sortBy = function (prop, direction = "asc") {
  const flag = direction.toLowerCase() === "asc" ? 1 : -1;
  return this.toSorted((a, b) => (a[prop] > b[prop] ? 1 : -1) * flag);
};

Array.prototype.findBy = function (prop, name) {
  return this.find((item) => item[prop] === name);
};

const users = [hong_1, kim_1, lee, park, ko, loon, choi];
const deptList = users.uniqBy("dept"); // [ 'HR', 'Server', 'Front', 'Sales' ]
console.log("🚀 ~ deptList:", deptList);

const hrUsers = users.filterBy("dept", "HR");
console.log("🚀 ~ hrUsers:", hrUsers);

console.log("🚀 ~ SortByName:", users.sortBy("name"));
console.log("🚀 ~ SortById:", users.sortBy("id", "desc"));

const choiFound = users.findBy("name", "Choi");
console.log("🚀 ~ choiFound:", choiFound);
