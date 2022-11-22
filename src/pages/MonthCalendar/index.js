import React from 'react';
import AnyDay from './components/anyDay';
import lastFridayOfMonth from './components/lastFriday';
import MonthDay from './components/monthDay';

const month = [];

const MonthCalendar = React.memo(
  (props) => {
    const correctedMonth = props._month - 1;
    const NameOfMonth = new Intl.DateTimeFormat('en-US', {
      month: 'long',
    }).format(new Date(props._year + '-' + props._month));
    const daysInMonth = new Date(props._year, props._month, 0).getDate();
    let weekDay = new Date(props._year, correctedMonth, 1).getDay();
    if (weekDay === 0) weekDay = 7;
    let m = 0;
    //alert(NameOfMonth);

    //deep clone array (or object if any)
    const deepCloneMonth = JSON.parse(JSON.stringify(month));
    if (NameOfMonth === 'November') {
      //import shopping holidays description database
      deepCloneMonth[10] = MonthDay.November[10];
      //to see parsed string
      //console.log('MonthDay = ' + JSON.stringify(MonthDay.November['Black Friday']));

      //calculate shopping-holidays' numbers

      //1. black friday - next day after thanksgiving day(forth thursday of november)
      const thanksGivingDay = AnyDay(props._year, props._month - 1, 4, 4);
      const blackFriday = thanksGivingDay + 1;
      deepCloneMonth[blackFriday - 1] = MonthDay.November['Black Friday'];

      //etc...
      const smallBusinessSaturday = blackFriday + 1;
      const cyberMonday = blackFriday + 3;

      if (smallBusinessSaturday <= 30) {
        deepCloneMonth[smallBusinessSaturday - 1] = 'Small Business Saturday';
        if (cyberMonday <= 30) {
          deepCloneMonth[cyberMonday - 1] = 'Cyber Monday';
        }
      }
    }
    if (NameOfMonth === 'December') {
      const thanksGivingDay = AnyDay(props._year, props._month - 2, 4, 4);
      const blackFriday = thanksGivingDay + 1;
      const smallBusinessSaturday = blackFriday + 1;
      const cyberMonday = blackFriday + 3;
      if (smallBusinessSaturday > 30) {
        deepCloneMonth[smallBusinessSaturday - 31] = 'Small Business Saturday';
      }
      if (cyberMonday > 30) {
        deepCloneMonth[cyberMonday - 31] = 'Cyber Monday';
      }
      const _secondMonday = AnyDay(props._year, props._month - 1, 2, 1);
      deepCloneMonth[_secondMonday - 1] = 'Green Monday';

      // last saturday before 25 December
      const _superSaturday = lastFridayOfMonth(
        props._year,
        props._month - 1,
        6,
        24,
      );
      deepCloneMonth[_superSaturday - 1] = 'Super Saturday';
    }

    return (
      <div className="month_card">
        <h4>{NameOfMonth}</h4>
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
                      <td
                        className="mc"
                        style={
                          deepCloneMonth[m]
                            ? {
                                backgroundColor:
                                  'var(--month-calendar-holiday-bg)',
                              }
                            : undefined
                        }>
                        <span>{(m = m + 1)}</span>
                        {deepCloneMonth[m - 1]}
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
