import React from 'react';

let monthDay = {
  November: [],
  December: [],
};

const nov11 = {
  holiday: 'Singles Day',
  desc: 'Established in 1993 by Chinese students. \nIn 2009, "Alibaba" began promoting it as a shopping holiday.',
};
monthDay.November[11 - 1] = <abbr title={nov11.desc}>{nov11.holiday}</abbr>;

export default monthDay;
