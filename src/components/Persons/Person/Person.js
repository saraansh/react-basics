import React from 'react';
import './Person.css';
import WithClass from '../../../hoc/WithClass';

const person = (props) => {
  console.log('[Person.js] rendering...');
  return (
    // using a higher order class instead of div to achieve similar results
    <WithClass classes="Person App-header">
      <p onClick={props.click}> I'm {props.name} and my age is {props.age}! </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.change} value={props.name} />
    </WithClass>
  );
}

export default person;