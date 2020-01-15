import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component {

  state = {};

  // Update Lifecycle Hook 1 - getDerivedStateFromProps
  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] getDerivedStateFromProps');
    // update state of the component based on the info from props
    return state;
  }

  // Update Lifecycle Hook 2 - shouldComponentUpdate
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    // render the updated component if and only if necessary
    if (nextProps.persons !== this.props.persons) {
      return true;
    } else {
      return false;
    }
  }

  /* Class components should extend PureComponent instead of Component if a shouldComponentUpdate check is needed for all the props */

  // Update Lifecycle Hook 4 - getSnapshotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    // generally used to get the position of the cursor and scroll etc. before update
    return {message: 'Sample snapshot!'};
  }

  // Update Lifecycle Hook 5 - componentDidUpdate
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    // send AJAX requests or update Analytics
    console.log(snapshot);
  }

  // Update Lifecycle Hook 3 - render
  render() {
    console.log('[Persons.js] render');
    return this.props.persons.map((person, index) => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        change={(event) => this.props.changed(event, person.id)}
        click={(index) => this.props.clicked(index)}
      />
    ));
  }

}

export default Persons;