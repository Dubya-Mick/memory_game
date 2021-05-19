import React, { useState, useEffect } from 'react'
import './DogCard.css'

function DogCard({ dog, dogClickHandler, gameOver }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setImageLoaded(false);
    }, [gameOver])

    return (
        <div key={dog.id}>
            <img
                className={`dog-image fade-in ${imageLoaded ? 'visible' : 'hidden'}`}
                alt="A Dog"
                src={dog.url}
                onLoad={() => setImageLoaded(true)}
                onClick={() => dogClickHandler(dog.id)}
            />
        </div>
    )
}

export default DogCard
