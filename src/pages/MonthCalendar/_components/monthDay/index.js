import React from 'react';

let monthDay = {
  November: [],
  December: [],
};

const nov11 = {
  holiday: "Singles' Day",
  description:
    '"Bare sticks (11/11) holiday". Established in 1993 by Chinese students. \nIn 2009, Alibaba began promoting it as a shopping holiday.',
};

//Handle html tags without external parsing.
//For that, remove single quotes & add dynamic variables.
monthDay.November[11 - 1] = (
  <abbr title={nov11.description}>{nov11.holiday}</abbr>
);

const blackFriday = {
  holiday: 'Black Friday',
  description: 'USA. "Shopping Disaster Day". \nFriday after Thanksgiving.',
};

monthDay.November['Black Friday'] = (
  <abbr title={blackFriday.description}>{blackFriday.holiday}</abbr>
);

const cyberMonday = {
  holiday: 'Cyber Monday',
  description:
    'USA, 2005. A marketing slogan designed to persuade people to shop online. \nMonday after Thanksgiving.',
};

monthDay.November['Cyber Monday'] = (
  <abbr title={cyberMonday.description}>{cyberMonday.holiday}</abbr>
);

const greenMonday = {
  holiday: 'Green Monday',
  description:
    'USA, 2007. "At least 10 days prior to Christmas". \nCoined by eBay as the last day for a timely purchase. \nUsually the second Monday of December.',
};

monthDay.December['Green Monday'] = (
  <abbr title={greenMonday.description}>{greenMonday.holiday}</abbr>
);

const superSaturday = {
  holiday: 'Super Saturday',
  description:
    "USA. Or Panic Saturday. The end of the sales season. \nIt's targets last-minute buyers. Last Saturday before Christmas.",
};

monthDay.December['Super Saturday'] = (
  <abbr title={superSaturday.description}>{superSaturday.holiday}</abbr>
);

export default monthDay;
