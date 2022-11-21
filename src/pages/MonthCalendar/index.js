import React from 'react';
import AnyDay from './components/anyDay';
import lastFridayOfMonth from './components/lastFriday';
import secondMonday from './components/secondMonday';

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
  December: [],
};

const MonthCalendar = React.memo(
  (props) => {
    const correctedMonth = props._month - 1;
    const NameOfMonthUS = new Intl.DateTimeFormat('en-US', {
      month: 'long',
    }).format(new Date(props._year + '-' + props._month));
    const daysInMonth = new Date(props._year, props._month, 0).getDate();
    let weekDay = new Date(props._year, correctedMonth, 1).getDay();
    if (weekDay === 0) weekDay = 7;
    let m = 0;
    //alert(NameOfMonthUS);

    const deepCloneMonth = JSON.parse(JSON.stringify(month));
    if (NameOfMonthUS === 'November') {
      const lastFriday = lastFridayOfMonth(props._year, props._month, 5);
      //console.log(lastFridayOfMonth(props._year, props._month));
      //const lastFriday = AnyDay(props._year, props._month - 1, 4, 5);
      //console.log(lastFriday);
      const smallBusinessSaturday = lastFriday + 1;
      const cyberMonday = lastFriday + 3;
      deepCloneMonth.November[lastFriday - 1] = 'Black Friday';
      if (smallBusinessSaturday <= 30) {
        deepCloneMonth.November[smallBusinessSaturday - 1] =
          'Small Business Saturday';
        if (cyberMonday <= 30) {
          deepCloneMonth.November[cyberMonday - 1] = 'Cyber Monday';
        }
      }
    }
    if (NameOfMonthUS === 'December') {
      const lastFriday = lastFridayOfMonth(props._year, props._month - 1, 5);
      //const lastFriday = AnyDay(props._year, props._month - 1, 4, 5);
      const smallBusinessSaturday = lastFriday + 1;
      const cyberMonday = lastFriday + 3;
      if (smallBusinessSaturday > 30) {
        deepCloneMonth.December[smallBusinessSaturday - 31] =
          'Small Business Saturday';
      }
      if (cyberMonday > 30) {
        deepCloneMonth.December[cyberMonday - 31] = 'Cyber Monday';
      }
      const _secondMonday = AnyDay(props._year, props._month - 1, 2, 1);
      //const _secondMonday = secondMonday(props._year, props._month - 1);
      //const _secondMonday = lastFridayOfMonth(props._year, props._month, 1);
      //console.log('secondMonday' + _secondMonday);
      deepCloneMonth.December[_secondMonday - 1] = 'Green Monday';
      const _superSaturday = lastFridayOfMonth(
        props._year,
        props._month - 1,
        6,
        24,
      );
      deepCloneMonth.December[_superSaturday - 1] = 'Super Saturday';
      //console.log(deepCloneMonth.December);
    }

    return (
      <div className="month_card">
        {/*<h3>{props._year}</h3>*/}
        <h4>{NameOfMonthUS}</h4>
        <table className="month">
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
  },
  (oldProps, newProps) => oldProps.props === newProps.props,
);

export default MonthCalendar;
