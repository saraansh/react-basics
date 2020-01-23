import React from 'react';
import './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends React.Component {
  constructor(props) {
    super(props);
    // Adding reference to an element in React
    this.inputElementRef = React.createRef();
  }

  // alternative (better) way of using context in class components
  // reserved keywork for context, provides the class with a static context object
  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus()
    this.inputElementRef.current.focus();
    // context variable provided by React with contextType intialization
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] render');
    return (
      // using a higher order class instead of div to achieve similar results
      <WithClass classes="Person App-header">
        {/* <AuthContext.Consumer>
          {(context) => context.authenticated ?
            <p onClick={this.props.click}> I'm {this.props.name} and my age is {this.props.age}! </p>
            :
            <p> Please authenticate to view the info! </p>
          }
        </AuthContext.Consumer> */}
        { // alternative way to use context in class based components
          this.context.authenticated ?
            <p onClick = {this.props.click}> I 'm {this.props.name} and my age is {this.props.age}! </p>
            :
            <p> Please authenticate to view the info! </p>
        }
        <p> {this.props.children} </p>
        <input
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.change}
          value={this.props.name} />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
}

export default Person;