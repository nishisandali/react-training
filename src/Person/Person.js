import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
    // Math.floor(Math.random() * 30) to output random whole number multiplied by 30
}

export default person;