import React, { Component } from 'react'

export class ConditionalRender extends Component {


    constructor()
    {
        super();
        this.state={ isLoggedIn:true };
    }

    render() {

        /* short circuit operator (SPECIFIC CASES) */
        return this.state.isLoggedIn && <div>Welcome Sunil</div>



        /* Ternary operator Approach 

        return this.state.isLoggedIn?(
            <div>Welcome Sunil</div>
        ):
        (
            <div>Welcome Guest</div>
        )
            */

        /*
        Element Variables Approach
        
        let message;

        if(this.state.isLoggedIn)
            {
                message=<div>Welcome Sunil</div>;
            }
        else
            {
                message=<div>Welcome Guest</div>
            }


        return (
            <div>
               {message} 
            </div>
            
        )
        */
    }
}

export default ConditionalRender
