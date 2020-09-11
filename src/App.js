import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';


function App() {
  return (
    
    <div className="App">

    
    <Greet name="sunil" heroName="superman">

    </Greet>
    <Welcome name="pie" heroName="flash">
      
    </Welcome>


    </div>

  );
}

export default App;
