import React, { useState } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

// class App extends Component {
//   state  = {
//     people : [
//       { name: 'Sandali', age: 26 },
//       { name: 'Kanishka', age: 32 },
//       { name: 'Anne', age: 19 }
//     ],
//     otherState: 'some other value'
//   }

//   switchNameHandler = () => {
//    // console.log('Was clicked!');
//    // DON'T DO THIS - this.state.people[0].name = 'Sanduni';

//    // setState is use to update state property. This will merge the changes to one
//     this.setState({
//       people: [
//         { name: 'Sanduni', age: 26 },
//         { name: 'Kanishka', age: 32 },
//         { name: 'Anne', age: 20 }
//       ]
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Hi, I am a React App</h1>
//         <p>This is really working</p>
//         <button onClick={this.switchNameHandler}>Switch Name</button>
//         <Person name={this.state.people[0].name} age={this.state.people[0].age} />
//         <Person name={this.state.people[1].name} age={this.state.people[1].age} > 
//           <p>My Hobbies are: Cleaning the house </p>
//         </Person>
//         <Person name={this.state.people[2].name} age={this.state.people[2].age} />
//       </div>
//      // <h1>Hi I am another element returning</h1> - cannot do this as JSX only let one root element
//     );

//     // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am a React App!!!, This works now!!!')); //This is the same code as the above jsx 
//     // This code is really complicated when there is gonna be alot of elements, therefore we use jsx files for the easier use
//   }
// }

const App = props => {
  const [personState, setPersonState] = useState({
    people: [
      { name: 'Sandali', age: 26 },
      { name: 'Kanishka', age: 32 },
      { name: 'Anne', age: 19 }
    ]
  });

  // Using many useStates to handle many components in useState hook

  const [otherState, setOtherState ] = useState('some other value');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      people: [
        { name: 'Sanduni', age: 26 },
        { name: 'Kanishka', age: 32 },
        { name: 'Anne', age: 20 }
      ]
      // otherState: personState.otherState - can use this but most elegant method is done where # is shown
    });
  };

  return (
    <div className="App">
      <h1>Hi, I am a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.people[0].name} age={personState.people[0].age} />
      <Person name={personState.people[1].name} age={personState.people[1].age} >
        <p>My Hobbies are: Cleaning the house </p>
      </Person>
      <Person name={personState.people[2].name} age={personState.people[2].age} />
    </div>
  );
}

export default App;
