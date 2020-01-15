import React from 'react';
// import classes from './Cockpit.css';

const cockpit = (props) => {
    // console.log(classes);
    // let btnClass = classes.Red;
    return (
        // <div className={classes.Cockpit}>
        <div>
            <h1> Hi I'm a React App! </h1>
            <button onClick={props.randomizeAge}> Randomize Age </button>
            <button onClick={props.undo}> Undo </button>
            <button onClick={props.redo}> Redo </button>
            <button onClick={props.display}> Log State </button>
            <br />
            <button onClick={props.toggle}> Toggle Persons </button>
            {/* <button className={btnClass} onClick={props.toggle}> Toggle Persons </button> */}
            <br />
        </div>
    );
}

export default cockpit;