import React from 'react'
import Person from './Person';

function ListRender() {

    const names=["sunil","raju","bandia"];

    /* other approach */
    const nameList=names.map(name=><h2>{name}</h2>)

    /* add 'id' to make each entry unique  */
    const personList=[{
        id:1,
        name:"sunil",
        age:23,
        skill:"react"
    },
    {   
        id:2,
        name:"bandia",
        age:22,
        skill:"business"
    },
    {
        id:3,
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

                /*
                personList.map(person=><Person person={person}></Person>)
                 this usage throws following error in console:

                    Each child in a list should have a unique "key" prop
                */

                /* solution for above error */
                personList.map(person=><Person key={person.id} person={person}></Person>)
                
            }
        </div>

        
    ) 

}

export default ListRender
