import React, {useState} from 'react';
import CardDetails from './CardDetails';

//todo: understand how to use something else than idx
function Card({index, cards, setCards}) {
    const defaultLabel = 'DefaultLabel';
    const defaultTitle = `Card n° ${index}`;
    const defaultCardDetailsVisibility = false;

    const [label, setLabel] = useState(defaultLabel);
    const [title, setTitle] = useState(defaultTitle);
    const [isCardDetailsVisible, setIsCardDetailsVisible] = useState(defaultCardDetailsVisibility);

    const handleCardDetailsDisplay = () => {
        setIsCardDetailsVisible(!isCardDetailsVisible);
    };

    const handleCardRemoval = () => {
        let newCards = [...cards];
        newCards.pop(index);
        setCards(newCards);
    };
    
    return (<div draggable="true">
                <div onClick={handleCardDetailsDisplay}>
                    <p>{label}</p>
                    <p>{title}</p>
                </div>
                <button onClick={handleCardRemoval}>Remove</button>
                <CardDetails/>
            </div>);
}

export default Card;