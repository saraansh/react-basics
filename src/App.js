import React, { Component } from 'react';
import './App.css';
import Person from './components/Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'ae123', name: 'Alan', age: 23 },
      { id: '213op', name: 'Christina', age: 21 },
      { id: 'ab987', name: 'Drake', age: 27 }
    ],
    prevState: {},
    nextState: {},
    showPersons: false
  }

  randomizeAgeHandler = () => {
    this.setState({
      persons: this.state.persons.map(person => ({...person, age: Math.floor(Math.random() * 30)})),
      prevState: { ...this.state },
      nextState: {}
    });
  }

  nameChangedHandler = (event, id) => {
    this.setState({
      persons: this.state.persons.map(person => {
        if (person.id === id) {
          person.name = event.target.value;
        }
        return person;
      })});
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonsHandler = (index) => {
    // slice creates a copy of persons (similar to ...persons)
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({
      persons: persons,
      prevState: { ...this.state },
      nextState: {}
    });
    console.log('Person deleted!');
  }

  undoHandler = () => {
    if (Object.keys(this.state.prevState).length) {
      this.setState({ ...this.state.prevState, nextState: { ...this.state } });
    }
    console.log("Undo last change");
  }

  redoHandler = () => {
    this.setState({ ...this.state.nextState });
    console.log("Redo last change");
  }

  showStateHandler = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <h1> Hi I'm a React App! </h1>
        <button onClick={this.randomizeAgeHandler}> Randomize Age </button>
        <button onClick={this.undoHandler}> Undo </button>
        <button onClick={this.redoHandler}> Redo </button>
        <button onClick={this.showStateHandler}> Log State </button>
        <br/>
          <button onClick={this.togglePersonsHandler}> Toggle Persons </button>
        <br/>
        <div>
          {/* You can also use a variable with an if statement before the return jsx call to contain the persons list*/}
          { this.state.showPersons ? this.state.persons.map((person, index) => {
            return <Person key={person.id} name={person.name} age={person.age}
              change={(event) => this.nameChangedHandler(event, person.id)} click={this.deletePersonsHandler.bind(this, index)} />
          }) : null}
        </div>
        {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          This is a new experience!
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} change={this.nameChangedHandler}>
          This is a new experience!
        </Person> */}
      </div>
    );
  }
}

export default App;
