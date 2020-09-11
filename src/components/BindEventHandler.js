import React, { Component } from 'react'

export class BindEventHandler extends Component {

    constructor()
    {
        super();
        this.clickHandler=this.clickHandler.bind(this);
        this.state={message:"hello"};
    }

    clickHandler()
    {
        console.log(this);//returns undefined if First approach is used
    }

    clickFunctionHandler=()=>{
        
        console.log(this);
        this.setState({message:"goodBye"})
    }

    render() {
        return (
            /* First Approach:Binding in render() method */

            /* Second Approach:Binding in render() method through arrow function */

            /* Third Approach:Binding in class constructor */

            /* Fourth Approach:Binding in arrow function property */
            <div>
                
                <h2>{this.state.message}</h2>

                <button onClick={this.clickHandler}>First Approach</button>

                 
                <button onClick={()=>this.clickHandler()}>Second Approach</button>

                <button onClick={this.clickHandler}>Third Approach</button>
               
                <button onClick={this.clickFunctionHandler}>Fourth Approach</button>
            </div>

                 
        )
    }
}

export default BindEventHandler
