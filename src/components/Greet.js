import React from 'react';


const Greet=(props)=>
{

    const {name,heroName,children}=props;

    return (

        <div>

            <h2>Destructuring state and props (Functional Component)</h2>

            <div>
                <h2>This is {name} a.k.a {heroName}</h2>
                <h3>{children}</h3>
            </div>

        </div>

);

}
/* defult export:means we can give any name to it when importing in other component */
export default Greet;