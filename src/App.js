import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import FunctionClick from './components/FunctionClick';


function App() {
  return (
    
    /* event handling */

    <div className="App">

      <FunctionClick/>

    </div>
    
     /* Destructuring state and props
    <div className="App">
    
      <Greet name="sunil" heroName="superman">

      </Greet>
      <Welcome name="pie" heroName="flash">
      
      </Welcome>

    </div>
    */
  );
}

export default App;
