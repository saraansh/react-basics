import React, { useEffect, useRef } from 'react';
import AuthContext from '../../context/auth-context';
// import classes from './Cockpit.css'; // watch the React styling tutorial to use this

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    // useEffect lifecycle hook
    useEffect(() => {
        console.log('[Cockpit.js] useEffect 1st');
        // http request or other side effects
        // const timer = setTimeout(() => {
        //     alert('Sample alert!');
        // }, 1000);
        toggleBtnRef.current.click();
        // specify what to do after rendering
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in 1st useEffect')
        }
    }, []);
    // [] refers to zero dependency and hence, the above useEffect hook is run only once (at the start)

    useEffect(() => {
        console.log('[Cockpit.js] useEffect 2nd');
        // specify what to do after rendering
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect')
        }
    });

    // console.log(classes);
    // let btnClass = props.showPersons ? classes.Red : '';
    return (
        // <div className={classes.Cockpit}>
        <div>
            <h1> Hi I'm a React App! </h1>
            <button onClick={props.randomizeAge}> Randomize Age </button>
            <button onClick={props.undo}> Undo </button>
            <button onClick={props.redo}> Redo </button>
            <button onClick={props.display}> Log State </button>
            <br />
            <AuthContext.Consumer>
                {(context) => <button onClick={context.login}> Login </button>}
            </AuthContext.Consumer>
            <button onClick={props.toggle} ref={toggleBtnRef}> Toggle Persons </button>
            {/* <button className={btnClass} onClick={props.toggle}> Toggle Persons </button> */}
            <br />
        </div>
    );
}

// React.memo stands for memoization in react components
// And updates the component iff. there is a change in the input (props) of the component
export default React.memo(Cockpit);