import React, {useState} from 'react';
import Card from './Card';

function Board(props) {
    var initialState = [];
    const [cards, setCards] = useState(initialState)
    return (
        <div className="Board">
            Board Title
            <ul>
                {cards}
            </ul>
            <button onClick={() => {setCards(cards.concat(<Card/>));}}>Add a card</button>
        </div>
    )
}

export default Board;