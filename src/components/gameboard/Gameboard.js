import React from 'react'
import DogCard from './DogCard'
import './GameBoard.css'

function GameBoard({ dogs, dogClickHandler, gameOver }) {
    const dogImages = dogs.map((dog) => (
        <div key={dog.id}>
            <DogCard
                dog={dog}
                dogClickHandler={dogClickHandler}
                gameOver={gameOver}
            />
        </div>
    ));
    return (
        <div className="GameBoard">
            {dogImages}
        </div>
    )
}

export default GameBoard
