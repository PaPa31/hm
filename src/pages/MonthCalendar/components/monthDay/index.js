import React from 'react';

let monthDay = {
  November: [],
  December: [],
};

const nov11 = {
  holiday: 'Singles Day',
  description:
    'Established in 1993 by Chinese students. \nIn 2009, "Alibaba" began promoting it as a shopping holiday.',
};

//Handle html tags without external parsing.
//For that, remove single quotes & add dynamic variables.
monthDay.November[11 - 1] = (
  <abbr title={nov11.description}>{nov11.holiday}</abbr>
);

const blackFriday = {
  holiday: 'Black Friday',
  description:
    'Since 1932, USA. Origin: either black marks on the roads from excessive traffic;\n or black ink for profit marks on documents (red ink for losses).',
};

monthDay.November['Black Friday'] = (
  <abbr title={blackFriday.description}>{blackFriday.holiday}</abbr>
);

const cyberMonday = {
  holiday: 'Cyber Monday',
  description:
    '2005. International. Cyber Monday - marketing catchphrase to persuade people to shop online.',
};

monthDay.November['Cyber Monday'] = (
  <abbr title={cyberMonday.description}>{cyberMonday.holiday}</abbr>
);

const greenMonday = {
  holiday: 'Green Monday',
  description: 'Green Monday aims to promote green lifestyle.',
};

monthDay.December['Green Monday'] = (
  <abbr title={greenMonday.description}>{greenMonday.holiday}</abbr>
);

const superSaturday = {
  holiday: 'Super Saturday',
  description: 'Super Saturday marks the end of the holiday shopping season.',
};

monthDay.December['Super Saturday'] = (
  <abbr title={superSaturday.description}>{superSaturday.holiday}</abbr>
);

export default monthDay;
