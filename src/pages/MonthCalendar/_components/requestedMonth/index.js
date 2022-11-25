import React from 'react';
import AnyDay from '../anyDay';
import lastDayOfWeekInMonth from '../lastDayOfWeekInMonth';

export default function requestedMonth(year, month) {
  //create a database of shopping holidays descriptions for the requested month

  let monthDay = [];

  //November
  if (month == 10) {
    // 1. 11/11
    const nov11 = {
      holiday: "Singles' Day",
      description:
        '"Bare sticks (11/11) holiday". Established in 1993 by Chinese students. \nIn 2009, Alibaba began promoting it as a shopping holiday.',
    };

    //Handle html tags without external parsing.
    //For that, remove single quotes & add dynamic variables.
    monthDay[11 - 1] = <abbr title={nov11.description}>{nov11.holiday}</abbr>;
    //to see parsed string

    //calculate shopping-holidays' numbers

    //2. black friday - next day after thanksgiving day(forth thursday of november)
    const thanksGivingDayNumber = AnyDay(year, month, 4, 4);
    const blackFridayNumber = thanksGivingDayNumber + 1;

    const blackFriday = {
      holiday: 'Black Friday',
      description: 'USA. "Shopping Disaster Day". \nFriday after Thanksgiving.',
    };

    monthDay[blackFridayNumber - 1] = (
      <abbr title={blackFriday.description}>{blackFriday.holiday}</abbr>
    );

    //etc...
    const cyberMondayNumber = blackFridayNumber + 3;
    if (cyberMondayNumber <= 30) {
      const cyberMonday = {
        holiday: 'Cyber Monday',
        description:
          'USA, 2005. A marketing slogan designed to persuade people to shop online. \nMonday after Thanksgiving.',
      };

      monthDay[cyberMondayNumber - 1] = (
        <abbr title={cyberMonday.description}>{cyberMonday.holiday}</abbr>
      );
    }
  }

  // December
  if (month == 11) {
    //first, check if cyber monday exists in November
    const thanksGivingDayNumber = AnyDay(year, month - 1, 4, 4);
    const blackFridayNumber = thanksGivingDayNumber + 1;
    const cyberMondayNumber = blackFridayNumber + 3;
    if (cyberMondayNumber > 30) {
      const cyberMonday = {
        holiday: 'Cyber Monday',
        description:
          'USA, 2005. A marketing slogan designed to persuade people to shop online. \nMonday after Thanksgiving.',
      };

      monthDay[cyberMondayNumber - 31] = (
        <abbr title={cyberMonday.description}>{cyberMonday.holiday}</abbr>
      );
    }

    const greenMondayNumber = AnyDay(year, month, 2, 1);

    const greenMonday = {
      holiday: 'Green Monday',
      description:
        'USA, 2007. "At least 10 days prior to Christmas". \nCoined by eBay as the last day for a timely purchase. \nUsually the second Monday of December.',
    };

    monthDay[greenMondayNumber - 1] = (
      <abbr title={greenMonday.description}>{greenMonday.holiday}</abbr>
    );

    // last saturday before 25 December
    const superSaturdayNumber = lastDayOfWeekInMonth(year, month, 6, 24);

    const superSaturday = {
      holiday: 'Super Saturday',
      description:
        "USA. Or Panic Saturday. The end of the sales season. \nIt's targets last-minute buyers. Last Saturday before Christmas.",
    };

    monthDay[superSaturdayNumber - 1] = (
      <abbr title={superSaturday.description}>{superSaturday.holiday}</abbr>
    );
  }

  return monthDay;
}
