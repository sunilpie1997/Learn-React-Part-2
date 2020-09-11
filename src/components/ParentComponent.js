import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

 class ParentComponent extends Component {

    constructor()
    {
        super();
        this.state={
            parentName:"parent"
        };

        this.greetHandler=this.greetHandler.bind(this);
        this.greetHandlerWithParam=this.greetHandlerWithParam.bind(this);
        
    }

    greetHandler()
    {
        alert(`hello ${this.state.parentName}`);
    }

    greetHandlerWithParam(child)
    {
        alert(`hello ${this.state.parentName} from ${child}`)
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetHandler} greetHandlerWithParam={this.greetHandlerWithParam}>

                </ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
