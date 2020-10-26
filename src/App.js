import React, {Component} from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';


class App extends Component {

  state = { textArray : '' };

  inputTextHandler = (event) => {
    this.setState({ textArray: event.target.value });
  }

  deleteCharHandler = (index) => {
    const text = this.state.textArray.split('');
    text.splice(index, 1);
    const newText = text.join('');
    this.setState({textArray: newText});
  }

  render () {
    const charList = this.state.textArray.split('').map((ch, index) => {
      return <Char
      character={ch}
      key={index}
      clicked={ () => this.deleteCharHandler(index)} />;
    });

  return (
    <div className="App">
      <input type="text"
      onChange={this.inputTextHandler}
      value={this.state.textArray} />
      <p>{this.state.textArray.length}</p>
      <Validation lengthInput={this.state.textArray.length}/>
      {charList}
    </div>
  );
  }
}

export default App;
