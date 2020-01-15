import React from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {
  // Create Lifecycle Hook 1 - Constructor
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

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

  // Create Licfecycle Hook 2 - getDerviedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // Create Lifecycle Hook 4 - componentDidMount
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  randomizeAgeHandler = () => {
    this.setState({
      persons: this.state.persons.map(person => ({ ...person, age: Math.floor(Math.random() * 30) })),
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
      })
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (index) => {
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

  // Create Lifecycle Hook 3 - render method
  render() {
    console.log('[App.js] render');
    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          randomizeAge={this.randomizeAgeHandler}
          undo={this.undoHandler}
          redo={this.redoHandler}
          display={this.showStateHandler}
          toggle={this.togglePersonsHandler}
        />
        <div>
          {
            this.state.showPersons ?
              <Persons
                persons={this.state.persons}
                changed={this.nameChangedHandler}
                clicked={this.deletePersonHandler}
              /> : null
          }
        </div>
      </div>
    );
  }
}

export default App;
