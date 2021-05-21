import React, { useEffect, useState } from 'react'
import './DogCard.css'

function DogCard({ dog, dogClickHandler, gameOver }) {
    // piece of state for managing whether or not image has loaded to allow for smooth fade-in
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false);
    }, [gameOver])

    return (
        <figure>
            <img
                className={`dog-image fade-in ${imageLoaded ? 'visible' : 'hidden'}`}
                alt={`A dog named ${dog.name}`}
                src={dog.url}
                onLoad={() => setImageLoaded(true)}
                onClick={() => dogClickHandler(dog.id)}
            />
            <figcaption
                className={`fade-in ${gameOver ? 'hidden' : 'visible'}`}
            >{dog.name}</figcaption>
        </figure>
    )
}

export default DogCard
