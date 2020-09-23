import React from 'react'
import Person from './Person';

function ListRender() {

    const names=["sunil","raju","bandia"];

    /* other approach */
    const nameList=names.map(name=><h2>{name}</h2>)

    const personList=[{
        name:"sunil",
        age:23,
        skill:"react"
    },
    {
        name:"bandia",
        age:22,
        skill:"business"
    },
    {
        name:"raju",
        age:22,
        skill:"sales"
    }
    ];

     return (
        <div>
            {
                //names.map(name=><h2>{name}</h2>)
                //nameList

                personList.map(person=><Person person={person}></Person>)
                /* this usage throws following error in console:

                    Each child in a list should have a unique "key" prop
                */
            }
        </div>

        
    ) 

}

export default ListRender
