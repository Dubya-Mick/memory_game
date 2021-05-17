import React, { useState, useEffect } from 'react'
import './DogCard.css'

function DogCard({dog}) {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div>
            <img
                className={`dog-image fade-in ${imageLoaded ? 'visible' : 'hidden'}`}
                alt="A Dog"
                src={dog}
                onLoad={() => {setImageLoaded(true)}}
            />
        </div>
    )
}

export default DogCard
