import React from 'react';
import classes from './bus.module.css';

// class Person extends React.Component {
//   render() {
//     return (
//       <p>
//         I'm {this.props.name} and I am {this.props.age} years old!
//       </p>
//     )
//   }
// }
const bus = (props) => {
  return (
    <div className={classes.Bus}>
      <p onClick={props.click}>
        From {props.name} I go by {props.num} bus!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default bus;
