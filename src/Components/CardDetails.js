import React, { useState } from 'react';

function CardDetails (props) {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  return (
    <div>
      <button onClick={togglePopUp}>Open PopUp</button>
      {isPopUpVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h1>PopUp Title</h1>
            <p>PopUp content goes here</p>
            <button onClick={togglePopUp}>Close PopUp</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetails;