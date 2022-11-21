import React from 'react';
import lastFridayOfMonth from '../lastFriday';

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
    ,
    ,
    ,
    ,
  ],
};

const MonthCalendar = (props) => {
  const correctedMonth = props._month - 1;
  const NameOfMonthUS = new Intl.DateTimeFormat('en-US', {
    month: 'long',
  }).format(new Date(props._year + '-' + props._month));
  const daysInMonth = new Date(props._year, props._month, 0).getDate();
  let weekDay = new Date(props._year, correctedMonth, 1).getDay();
  if (weekDay === 0) weekDay = 7;
  let m = 0;

  const lf = lastFridayOfMonth(props._year, props._month);
  const deepCloneMonth = JSON.parse(JSON.stringify(month));
  deepCloneMonth.November[lf - 1] = 'Black Friday';

  return (
    <div>
      <h3>{props._year}</h3>
      <h4>{NameOfMonthUS}</h4>
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
                        {deepCloneMonth[NameOfMonthUS] &&
                          deepCloneMonth[NameOfMonthUS][m - 1]}
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
    </div>
  );
};

export default MonthCalendar;
