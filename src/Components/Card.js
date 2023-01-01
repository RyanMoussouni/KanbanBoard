import React, {useState} from 'react';

function Card({cards, setCards}) {
    const defaultLabel = 'DefaultLabel';
    const defaultTitle = 'DefaultTitle';
    const [label, setLabel] = useState(defaultLabel);
    const [title, setTitle] = useState(defaultTitle);

    const handleRemove = () => {
        let newCards = [...cards];
        newCards.pop();
        setCards(newCards);
    }
    
    return (<div>
        <p>{label}</p>
        <p>{title}</p>
        <button onClick={handleRemove}>Remove</button>
        </div>)
}

export default Card;