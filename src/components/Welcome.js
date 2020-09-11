import React from 'react';


class Welcome extends React.Component{

    render(){

        const {name,heroName}=this.props;

        return (
        
            <div>
                <h2>Destructuring state and props (Class Component)</h2>
                <h2>{name} a.k.a {heroName}</h2>
            </div>

        );
    }
}


export default Welcome;