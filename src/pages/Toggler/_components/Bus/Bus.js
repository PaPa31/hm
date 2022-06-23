import React, {Component} from 'react';
import axios from 'axios';
import classes from './Bus.module.css';
import BusRoutes from '../BusRoutes/BusRoutes';

class Bus extends Component {
  state = {
    buses: [],
    selectedBus: null,
  };

  componentDidMount() {
    async function fetchAndParse(url) {
      let div = document.createElement('div');
      div.innerHTML = await (await fetch(url)).text();
      let p = Array.from(div.querySelectorAll('p')).map((p) => p.innerText);
      console.log('p = ' + p);
      return p;
    }

    function getNodeText(node) {
      if (['string', 'number'].includes(typeof node)) return node;
      if (node instanceof Array) return node.map(getNodeText).join('');
      if (typeof node === 'object' && node) return getNodeText(node?.innerText);
    }

    if (this.props.num) {
      if (
        !this.state.selectedBus ||
        (this.state.selectedBus && this.state.selectedBus.id !== this.props.num)
      ) {
        fetchAndParse(`./_rasp${this.props.num}.html`).then((p) => {
          console.log('p = ' + p);
          return this.setState({selectedBus: p});
        });
      }
    }
  }

  busSelectedHandler = (id) => {
    this.setState({selectedBus: id});
  };

  render() {
    let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
    if (this.props.num) {
      post = <p style={{textAlign: 'center'}}>Loading...!</p>;
    }
    if (this.state.selectedBus) {
      const length = this.state.selectedBus.length;
      console.log('length = ' + length);
      let polReisa = 0;
      let tudaObratno = [];
      for (let i = 0; i < length; i++) {
        if (/^\d/.test(this.state.selectedBus[i])) {
          tudaObratno[polReisa] = this.state.selectedBus[i];
          polReisa++;
        }
      }

      console.log('polReisa ' + polReisa);
      console.log('tudaObratno ' + tudaObratno);

      let count = 0;

      post = (
        <div>
          {polReisa > 0 ? (
            <div>
              <div>
                {console.log('[Bus.js] REturning...' + this.state.selectedBus)}
              </div>
              <h1>{this.props.num}</h1>
              <div>
                <div className={classes.BusRoutes}>
                  <BusRoutes
                    polReisa={polReisa}
                    dir="tuda"
                    name={this.props.name}
                    tudaObratno={tudaObratno}
                  />
                  <BusRoutes
                    polReisa={polReisa}
                    dir="obratno"
                    name={this.props.name}
                    tudaObratno={tudaObratno}
                  />
                </div>
              </div>
            </div>
          ) : null}
        </div>
      );
    }

    return post;
  }
}

export default Bus;
