import React, { useState } from 'react';

function CardDetails (props) {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [isDescriptionEditable, setIsDescriptionEditable] = useState(false);

  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };
  //TODO: make this interact with CSS
  const editDescription = () => { 
    setIsDescriptionEditable(!isDescriptionEditable);
  };

  return (
    <div>
      <button onClick={togglePopUp}>Open PopUp</button>
      {isPopUpVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h1 contentEditable>PopUp Title</h1>
            <h2> Description </h2>
            <button onClick={editDescription}>Edit</button> 
                <textArea onclick={editDescription} className='popup-description' placeholder='Description Content goes here'></textArea>
            <h2> Activity </h2>
                <textArea className='popup-activity' placeholder='Activity Content goes here'></textArea>
            <button onClick={togglePopUp}>Close PopUp</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;