import React from 'react'

function Person({person}) {

    
    return (
                <h3>I am {person.name}. I am {person.age} years old. I know {person.skill}.</h3>                     
        
            )
}

/*

BELOW CODE throws error as
'key' is a reserved keyword required by React to uniquely identify each part of list as it uses virtual DOM.

Further explanation is in notes

function Person({person,key}) {

    return (
        
                // <h3>{key} I am {person.name}. I am {person.age} years old. I know {person.skill}. </h3> 
                     
    )
}
*/


export default Person
