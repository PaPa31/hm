import React from 'react';

import './Person.css';

// class Person extends React.Component {
//   render() {
//     return (
//       <p>
//         I'm {this.props.name} and I am {this.props.age} years old!
//       </p>
//     )
//   }
// }
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
