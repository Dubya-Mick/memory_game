import React from 'react'
import DogCard from './DogCard'
import './GameBoard.css'

function Gameboard({dogs, dogClickHandler}) {
    // shuffle dog images
    const dogImages = dogs
        .map(a => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .map((dog) => (
            <DogCard 
                dog={dog}
                dogClickHandler={dogClickHandler}
            />
        ));
    return (
        <div className="GameBoard">
            {dogImages}
        </div>
    )
}

export default Gameboard
