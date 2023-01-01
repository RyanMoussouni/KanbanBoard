import React, {useState} from 'react';

//todo: understand how to use something else than idx
function Card({index, cards, setCards}) {
    const defaultLabel = 'DefaultLabel';
    const defaultTitle = `Card n° ${index}`;
    const [label, setLabel] = useState(defaultLabel);
    const [title, setTitle] = useState(defaultTitle);

    const handleDisplay = () => {
        console.log("Display!");
    };

    const handleRemove = () => {
        let newCards = [...cards];
        newCards.pop(index);
        setCards(newCards);
    };
    
    return (<div>
                <div onClick={handleDisplay}>
                    <p>{label}</p>
                    <p>{title}</p>
                </div>
                <button onClick={handleRemove}>Remove</button>
            </div>);
}

export default Card;