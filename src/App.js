import './App.css';
import List from './Components/List';
import React, { useState } from 'react';


function App() {
  const [isList, setIsList] = useState(false);
  const renderList = () => {
    let toRender = (<button onClick={() => setIsList(true)}> Add a list </button>)
    if (isList)
    {
      toRender = (<List/>);
    }

    return toRender;
  };

  return (
    <div className="App">
      <div>
        <List/>
      </div>
      <div>
        {renderList()}
      </div>
    </div>
  );
}

export default App;
