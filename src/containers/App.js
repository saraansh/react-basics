import React from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxiliary from '../hoc/Auxiliary';
import withClassName from '../hoc/withClassName';

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
    showPersons: false,
    showCockpit: false
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
    // this is the proper way of implementing a state update
    this.setState((prevState, props) => {
      return {
        persons: prevState.persons.map(person => ({ ...person, age: Math.floor(Math.random() * 30) })),
        prevState: { ...prevState },
        nextState: {}
      }
    });
  }

  nameChangedHandler = (event, id) => {
    // this method of state change should not be encouraged as state may not be updated instantly by react
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
    this.setState((prevState, props) => {
      return {
        persons: persons,
        prevState: { ...prevState },
        nextState: {}
      }
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

  toggleCockpitHandler = () => {
    this.setState({
      showCockpit: !this.state.showCockpit
    });
  }

  // Create Lifecycle Hook 3 - render method
  render() {
    console.log('[App.js] render');
    return (
      // A higher order component such as Auxiliary (same as the in-built React.Fragment)
      // can be used to wrap different kinds of component together as one single component
      // <div className="App">
      <Auxiliary>
        <button onClick={this.toggleCockpitHandler}> Toggle Cockpit </button>
        {
          this.state.showCockpit ?
            <Cockpit
              showPersons={this.state.showPersons}
              randomizeAge={this.randomizeAgeHandler}
              undo={this.undoHandler}
              redo={this.redoHandler}
              display={this.showStateHandler}
              toggle={this.togglePersonsHandler}
            /> : null
        }
        {
          this.state.showPersons ?
            <Persons
              persons={this.state.persons}
              changed={this.nameChangedHandler}
              clicked={this.deletePersonHandler}
            /> : null
        }
      </Auxiliary>
      // </div>
    );
  }
}

export default withClassName(App, "App");
