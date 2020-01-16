// It is a good practise to start higher order classes with "With"
// Check usage - persons/person/Person.js

import React from 'react';

const WithClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

export default WithClass;