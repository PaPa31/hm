// @ts-check

import React, {Component} from 'react';
import './styles.module.css';
import Person from './_components/Person/Person';
import Da4aBus from '../Da4aBus';
import PostsWithFetch from '../Da4aBus/_components/hooks/PostsWithFetch';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      {id: '20210330005200', name: 'РТИ', age: 297},
      {id: '20210330005205', name: 'Manu', age: 100},
      {id: '20210330005209', name: 'Stephanie', age: 110},
    ],
    showPersons: false,
    changeCounter: 0,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  //   componentWillMount() {
  //     console.log("[App.js] componentWillMount");
  //   }
  componentDidMount() {
    console.log('[App.js] componentDidMount');
    //const initial = [...this.state.persons];
    return [...this.state.persons];
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = true;
    this.setState({showPersons: !doesShow});
  };

  onlyPersonsHandler = (id) => {
    //console.log('Hi');
    const persons = [...this.state.persons];
    this.state.persons.map((person, index) => {
      //console.log('id = ' + id);
      //console.log('person.id = ' + person.id);
      if (id !== person.id) {
        //console.log('Ne Sovpalo');
        persons.splice(index, 2);
        //console.log(persons);
      }
    });

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });

    //this.setState({persons: persons});
    //console.log(this.state.persons);
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  render() {
    console.log('[App.js] render');
    const style = {
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    //const initial = () => {
    //  if (!this.state.showPerson) {
    //    return [...this.state.persons];
    //  }
    //};

    const initial = this.componentDidMount;

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <div>
                <PostsWithFetch num={person.age} />
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        {initial.map((person, index) => {
          return (
            <button
              key={index}
              style={style}
              onClick={() => {
                this.onlyPersonsHandler(person.id);
              }}>
              {person.age}
            </button>
          );
        })}
        {persons}
      </div>
    );
  }
}

export default App;
