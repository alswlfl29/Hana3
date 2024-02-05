export const getLastDate = (yearOrDate, month = -1) => {
  const isReceiveDate = typeof yearOrDate === "object";
  const dt = isReceiveDate ? yearOrDate : new Date();
  if (!isReceiveDate) dt.setFullYear(yearOrDate);
  if (month > 0 && month <= 12) dt.setMonth(month - 1);
  dt.setDate(1);
  dt.setMonth(month);
  dt.setDate(0);
  return dt.getDate();
};
