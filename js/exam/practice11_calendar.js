import { getLastDate } from "../utils/dateutils.js";

const weekNames = [..."일월화수목금토"];

const lastDate = getLastDate(2024, 2);
console.log("🚀 ~ lastDate:", getLastDate(2024, 2));
// console.log("🚀 ~ lastDate:", getLastDate(new Date()));
console.log("=======================================================");
const calendar = (year, month) => {
  const dt = new Date();
  dt.setFullYear(year);
  dt.setMonth(month - 1);
  dt.setDate(1);
  const days = Array(dt.getDay())
    .fill("")
    .concat(Array.from({ length: getLastDate(dt) }, (_, i) => i + 1));

  const titleWeek = ` ${weekNames.join(" ")}`;
  console.log("----------------------");
  console.log(`${" ".repeat(6)}${year}년 ${month}월`);
  console.log(titleWeek);
  console.log(
    days
      .map(
        (day, idx) =>
          `${day.toString().padStart(3)}${(idx + 1) % 7 === 0 ? "\n" : ""}`
      )
      .join("")
  );
  console.log("----------------------");
};

calendar(2024, 2);
console.log("=======================================================");
