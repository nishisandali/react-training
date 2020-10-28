import React, { Component } from 'react';

import './App.css';

import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state  = {
    people : [
      { id: 'ab01', name: 'Sandali', age: 26 },
      { id: 'ab02', name: 'Kanishka', age: 32 },
      { id: 'ab03', name: 'Anne', age: 19 }
    ],
    otherState: 'some other value',
    showPerson: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.people[personIndex]
    };

    person.name = event.target.value;

    const people = [...this.state.people];
    people[personIndex] = person;

    this.setState( {
      people: people
    });
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow});
  }

  render() {

    let person = null;

    if (this.state.showPerson) {
      person = 
          <People 
          people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}/>;
    }

    return (
      <div className="App">
        <Cockpit 
        people={this.state.people}
        showed={this.state.showPerson}
        toggled={this.togglePersonHandler}/>
        {person}
      </div>
    );
  }
}

export default App;
