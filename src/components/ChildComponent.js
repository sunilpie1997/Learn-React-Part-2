import React from 'react'

function ChildComponent(props) {

    return (
        <div>
            <button onClick={props.greetHandler}>Greet</button>
            <button onClick={()=>{  props.greetHandlerWithParam('child') }}>Greet With Parameters</button>
        </div>
    )
}

export default ChildComponent
