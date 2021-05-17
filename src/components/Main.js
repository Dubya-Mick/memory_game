import React, { useEffect, useState } from 'react'
import Gameboard from './gameboard/Gameboard'
import GameHeader from './gameboard/GameHeader'
import './Main.css';

function Main() {

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        const getDogs = async () => {
            try {
                const result = await fetch('https://dog.ceo/api/breeds/image/random/12', { mode: 'cors' });
                const dogLinks = await result.json();
                setDogs(dogLinks.message);
                console.log(dogs);
            } catch (error) {
                console.log(error);
            }
        }

        getDogs();
    }, [])






    return (
        <div className="Main">
            <GameHeader />
            <Gameboard 
                dogs={dogs}
            />
        </div>
    )
}

export default Main
