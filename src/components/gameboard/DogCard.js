import React, { useState } from 'react'
import './DogCard.css'

function DogCard({dog, dogClickHandler}) {
    const [imageLoaded, setImageLoaded] = useState(false);

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
