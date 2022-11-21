export default function AnyDay(year, month, ordinal, dayOfWeek) {
  let d = new Date(year, month, 0);
  console.log('d =' + d);
  //d.setUTCHours(0, 0, 0, 0);
  console.log(d);

  const ORDINALCONST =
    7 * ordinal + dayOfWeek - d.getDay() - (d.getDay() < dayOfWeek ? 7 : 0);
  console.log(ORDINALCONST);
  d.setDate(d.getDate() + ORDINALCONST);
  console.log(d.getDate());

  return d.getDate();
}
