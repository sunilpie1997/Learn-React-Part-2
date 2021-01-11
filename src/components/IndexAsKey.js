import React, { Component } from 'react';

export class IndexAsKey extends React.Component{

    nameList= ["sunil","raju","bandiya"];
    
    render(){
        return this.nameList.map((eachName,index)=><h2 key={index}>{eachName}</h2>)
    }
}

export default IndexAsKey;