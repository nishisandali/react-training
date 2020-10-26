import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';

import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${ props => props.alt ? 'red' : 'green' };
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${ props => props.alt ? 'salmon' : 'lightgreen' };
    color: black;
  }
`;

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
    const style = {

    };

    let person = null;

    if (this.state.showPerson) {
      person = (
        <div>
          {this.state.people.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id} 
            changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div> 
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if (this.state.people.length <= 2){
      classes.push('red'); 
    }

    if (this.state.people.length <= 1) {
      classes.push('bold'); 
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <StyledButton 
        alt={this.state.showPerson} 
        onClick={this.togglePersonHandler}> Toggle Person </StyledButton>
        {person}
      </div>
    );
  }
}

export default App;
