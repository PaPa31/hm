import React from 'react';
//import LastFridayOfMonth from '../lastFriday';

const month = {
  November: [
    "All Saint's Day",
    "All Souls' Day",
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    'Singles Day',
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    'Black Friday',
    ,
    'Begin Advent',
    'Cyber Monday',
  ],
};

function lastFridayOfMonth(year, month) {
  let lastDay = new Date(year, month, 0);
  if (lastDay.getDay() < 5) {
    lastDay.setDate(lastDay.getDate() - 7);
  }
  lastDay.setDate(lastDay.getDate() - (lastDay.getDay() - 5));
  const day = lastDay;
  const dm7 = new Date(+day);
  return day.getDay() + ' | ' + day + ' | ' + dm7;
}

const MonthCalendar = (props) => {
  //const _year = new Date().getFullYear();
  //const _month = new Date().getMonth() + 1;
  const correctedMonth = props._month - 1;
  const NameOfMonthUS = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(new Date(props._year + '-' + props._month));
  //var dayInt = new Date(myDate).getDay();
  const daysInMonth = new Date(props._year, props._month, 0).getDate();
  let weekDay = new Date(props._year, correctedMonth, 1).getDay();
  if (weekDay === 0) weekDay = 7;
  let m = 0;
  const lf = lastFridayOfMonth(props._year, props._month);
  //console.log(weekDay);
  return (
    <>
      <h3>{props._year}</h3>
      <h4>{NameOfMonthUS}</h4>
      <h5>{lf}</h5>
      {/*<LastFridayOfMonth year={props._year} month={props._month} />*/}
      <table class="month">
        <thead>
          <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({length: 6}).map((key, j) =>
            m < daysInMonth ? (
              <tr>
                {Array.from({length: 7}).map((key, index) =>
                  (j > 0 && m < daysInMonth) ||
                  (j == 0 && index >= weekDay - 1) ? (
                    <td>
                      <span>{(m = m + 1)}</span>
                      <span>
                        {month[NameOfMonthUS] && month[NameOfMonthUS][m - 1]}
                      </span>
                    </td>
                  ) : (
                    <td></td>
                  ),
                )}
              </tr>
            ) : null,
          )}
        </tbody>
      </table>
    </>
  );
};

export default MonthCalendar;
