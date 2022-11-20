import React from 'react';

export default LastFridayOfMonth = (props) => {
  let lastDay = new Date(props.year, props.month + 1, 0);
  if (lastDay.getDay() < 5) {
    lastDay.setDate(lastDay.getDate() - 7);
  }
  lastDay.setDate(lastDay.getDate() - (lastDay.getDay() - 5));
  return lastDay;
};
