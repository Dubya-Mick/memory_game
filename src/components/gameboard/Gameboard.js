import React from 'react'
import DogCard from './DogCard'
import './GameBoard.css'

function Gameboard({dogs}) {
    const dogImages = dogs.map((dog) => (
        <DogCard 
            dog={dog}
        />
    ));
    return (
        <div className="GameBoard">
            {dogImages}
        </div>
    )
}

export default Gameboard
