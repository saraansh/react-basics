// An alternative way to use high order components
// Here we use a function that renders the higher order component
// Check usage - containers/App.js

import React from 'react';

const withClassName = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClassName;