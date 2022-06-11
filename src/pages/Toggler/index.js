// @ts-check

import React, {Component, Fragment} from 'react';
import './styles.module.css';
import Bus from './_components/Person/Person';
import PostsWithFetch from '../Da4aBus/_components/hooks/PostsWithFetch';

const BUS_PRICES = {
  cash: 30,
  card: 27,
  pension: 30,
  free: 0,
};

const BUSES = {
  buses: [
    {id: '20210330005200', name: 'РТИ', num: 296},
    {id: '20220611183712', name: 'РТИ', num: 297},
    {id: '20210330005205', name: 'Клиффорд', num: 100},
    {id: '20210330005209', name: 'Клиффорд', num: 110},
  ],
};

class BusRoute extends Component {
  state = {
    buses: [],
    showBuses: false,
    changeCounter: 0,
  };

  addBusHandler = (num) => {
    const oldCount = this.state.buses[num];
    const updateCount = oldCount + 1;
    const updatedBuses = {
      ...this.state.buses,
    };
    updatedBuses[num] = updateCount;
    const priceAddition = BUS_PRICES[num];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, buses: updatedBuses});
  };

  removeBusHandler = (num) => {
    const oldCount = this.state.buses[num];
  };

  nameChangedHandler = (event, id) => {
    const busIndex = this.state.buses.findIndex((p) => {
      return p.id === id;
    });

    const bus = {
      ...this.state.buses[busIndex],
    };

    // const bus = Object.assign({}, this.state.buses[busIndex]);

    bus.name = event.target.value;

    const buses = [...this.state.buses];
    buses[busIndex] = bus;

    this.setState({
      buses: buses,
    });
  };

  deleteBusHandler = (busIndex) => {
    // const buses = this.state.buses.slice();
    const buses = [...this.state.buses];
    buses.splice(busIndex, 1);
    this.setState({buses: buses});
  };

  //toggleBusesHandler = () => {
  //  const doesShow = true;
  //  this.setState({showBuses: !doesShow});
  //};

  onlyBusesHandler = (id) => {
    //this.setState({buses: []});
    console.log('Hi');
    const buses = [];
    BUSES.buses.map((bus, index) => {
      console.log('id = ' + id);
      console.log('bus.id = ' + bus.id);
      if (id === bus.id) {
        console.log('Sovpalo');
        buses[index] = bus;
        console.log(buses);
      }
      //if (id !== bus.id) {
      //  console.log('Ne Sovpalo');
      //  buses.splice(index, 1);
      //  console.log(buses);
      //}
    });

    this.setState({buses: buses});

    //this.setState((prevState, props) => {
    //  return {
    //    buses: buses,
    //    changeCounter: prevState.changeCounter + 1,
    //  };
    //});

    //this.setState({buses: buses});
    //console.log(this.state.buses);
    const doesShow = true;
    this.setState({showBuses: doesShow});
  };

  render() {
    const style = {
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let buses = null;

    if (this.state.showBuses) {
      buses = (
        <div>
          {this.state.buses.map((bus, index) => {
            console.log(bus.num);

            return (
              <div>
                <PostsWithFetch num={bus.num} name={bus.name} />
                <Bus
                  click={() => this.deleteBusHandler(index)}
                  name={bus.name}
                  num={bus.num}
                  key={bus.id}
                  changed={(event) => this.nameChangedHandler(event, bus.id)}
                />
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <Fragment>
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        {BUSES.buses.map((bus, index) => {
          return (
            <button
              key={index}
              style={style}
              onClick={() => {
                this.onlyBusesHandler(bus.id);
              }}>
              {bus.num}
            </button>
          );
        })}
        {buses}
      </Fragment>
    );
  }
}

export default BusRoute;
