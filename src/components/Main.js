import React, { useEffect, useState } from 'react'
import uniqid from 'uniqid';
import Gameboard from './gameboard/Gameboard'
import GameHeader from './gameboard/GameHeader'
import './Main.css';

function Main() {

    const [dogs, setDogs] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const processDogs = (dogUrls) => {
        return dogUrls.map(dogUrl => ({id: uniqid(), url: dogUrl, alreadyClicked: false}));
    };

    const dogIsAlreadyClicked = (id) => {
        return dogs.some(dog => dog.id === id && dog.alreadyClicked);
    };

    const setDogToClicked = (id) => {
        const newDogs = dogs.map(dog => {
            if (dog.id === id) {
                return {...dog, alreadyClicked: true}
            };
            return dog;
        });
        setDogs(newDogs);
    };

    const incrementScore = () => {
        setScore(prevScore => prevScore + 1);
    }

    const dogClickHandler = (id) => {
        if (dogIsAlreadyClicked(id)) {
            console.log('alreadyClicked')
        } else {
            setDogToClicked(id);
            incrementScore();
        }
    }


    useEffect(() => {
        console.log(dogs)
    }, [dogs])

    useEffect(() => {
        const getDogs = async () => {
            try {
                const result = await fetch('https://dog.ceo/api/breeds/image/random/12', { mode: 'cors' });
                const dogData = await result.json();
                const dogItems = processDogs(dogData.message);
                setDogs(dogItems);
            } catch (error) {
                console.log(error);
            }
        }

        getDogs();
    }, [])


    return (
        <div className="Main">
            <GameHeader
                score={score}
                bestScore={bestScore}
            
            />
            <Gameboard 
                dogs={dogs}
                dogClickHandler={dogClickHandler}

            />
        </div>
    )
}

export default Main
