import React, {useState} from 'react';

function Board(props) {
    var initialState = [<li><textarea></textarea></li>];
    const [cards, setCards] = useState(initialState)
    return (
        <div className="Board">
            Board Title
            <ul>
                {cards}
            </ul>
            <button onClick={() => {setCards(cards.concat(<li><textarea></textarea></li>));}}>Click me!</button>
        </div>
    )
}

export default Board;