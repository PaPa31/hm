export default function lastFridayOfMonth(year, month) {
  let lastDay = new Date(year, month, 0);
  lastDay.setDate(lastDay.getDate() - ((lastDay.getDay() + 2) % 7));
  return lastDay.getDate();
}
