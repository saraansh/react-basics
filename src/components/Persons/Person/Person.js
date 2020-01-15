import React from 'react';
import './Person.css';

const person = (props) => {
  console.log('[Person.js] rendering...');
  return (
    <div className="Person App-header">
      <p onClick={props.click}> I'm {props.name} and my age is {props.age}! </p>
      <p> {props.children} </p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
}

export default person;