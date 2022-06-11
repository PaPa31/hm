import React from 'react';
import Bus from '../_components/Bus/Bus';

const buses = (props) =>
  props.buses.map((bus, index) => {
    console.log(bus.num);

    return (
      <div>
        <Bus num={bus.num} name={bus.name} />
      </div>
    );
  });

export default buses;
