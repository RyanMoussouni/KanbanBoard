import React, {useState} from 'react';
import List from './List';

function MainPanel(props) {
    const defaultLists = (<List/>);
    const [lists, setLists] = useState([defaultLists]);
    const handleUpdate = () => {
      let updatedLists = [...lists];
      (updatedLists).push((<List/>));
      setLists(updatedLists);
    };

    return (
      <div className="App">
        <div>
          {lists}
        </div>
        <div>
          <button onClick={handleUpdate}>Add a list</button>
        </div>
      </div>
    );
}

export default MainPanel;