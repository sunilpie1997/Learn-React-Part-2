import React from 'react';


const FunctionClick=(props)=>
{

    function clickHandler()
    {
        console.log("button clicked");
    }

    return (

       <button onClick={clickHandler()}>Click me</button>

);

}

export default FunctionClick;