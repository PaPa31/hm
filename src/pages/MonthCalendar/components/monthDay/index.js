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
    '1932, USA. Origin: either black marks on the roads from excessive traffic;\n or black ink for profit marks on documents (red ink for losses).',
};

monthDay.November['Black Friday'] = (
  <abbr title={blackFriday.description}>{blackFriday.holiday}</abbr>
);

export default monthDay;
