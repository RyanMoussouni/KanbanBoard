import React, {useState} from 'react';
import Card from './Card';

function List(props) {
    const initialState = [];
    const [cards, setCards] = useState(initialState);
    
    const handleUpdate = () => {
        let newCard = (<Card cards={cards} setCards={setCards}/>);
        let updatedCards = cards.concat(newCard);
        setCards(updatedCards);
    };
    const cardMap = (card, index) => (<Card key={index} index={index} cards={cards} setCards={setCards}/>);

    return (
        <div className="List">
            List Title
            <ul>{cards.map(cardMap)}</ul>
            <button onClick={handleUpdate}>Add a card</button>
        </div>
    );
}

export default List;