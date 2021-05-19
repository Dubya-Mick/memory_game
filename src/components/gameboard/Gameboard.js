import React from 'react'
import DogCard from './DogCard'
import './GameBoard.css'

function Gameboard({ dogs, dogClickHandler, gameOver }) {
    // shuffle dog images
    const dogImages = dogs.map((dog) => (
        <DogCard 
            dog={dog}
            dogClickHandler={dogClickHandler}
            gameOver={gameOver}
        />
    ));
    return (
        <div className="GameBoard">
            {dogImages}
        </div>
    )
}

export default Gameboard
