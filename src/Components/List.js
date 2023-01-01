import React, {useState} from 'react';
import Card from './Card';

function List(props) {
    const initialState = [];
    const [cards, setCards] = useState(initialState);
    const handleUpdate = () => {
        let updatedCards = cards.concat((<Card cards={cards} setCards={setCards}/>));
        setCards(updatedCards);
    };

    return (
        <div className="List">
            List Title
            <ul>
                {cards}
            </ul>
            <button onClick={handleUpdate}>Add a card</button>
        </div>
    );
}

export default List;