import React, { useEffect, useState } from 'react'
import uniqid from 'uniqid';
import dogNames from 'dog-names';
import GameBoard from './gameboard/Gameboard';
import GameHeader from './gameboard/GameHeader';
import GameOverModal from './GameOverModal';
import './Main.css';
import WinnerConfetti from './WinnerConfetti';

function Main() {
    const [dogs, setDogs] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    // create array of objects from array of dog URLs
    const processDogs = (dogUrls) => {
        return dogUrls.map(dogUrl => (
            {id: uniqid(), url: dogUrl, alreadyClicked: false, name: dogNames.allRandom()}));
    };

    // shuffle order of the dogs
    const shuffleDogs = (currentDogs) => {
        const shuffledDogs = currentDogs        
            .map(a => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map(a => a.value);
        return shuffledDogs;
    }

    // check if the dog clicked has already been clicked
    const dogIsAlreadyClicked = (id) => {
        return dogs.some(dog => dog.id === id && dog.alreadyClicked);
    };

    // set click status of clicked dog, then shuffle dogs
    const clickDog = (id) => {
        const newClickedDogs = dogs.map(dog => {
            if (dog.id === id) {
                return {...dog, alreadyClicked: true}
            };
            return dog;
        });
        const newDogs = shuffleDogs(newClickedDogs);
        setDogs(newDogs);
    };

    const incrementScore = () => {
        const newScore = score + 1;
        if (newScore > bestScore) {
            setBestScore(newScore)
        }
        setScore(newScore);
    };

    const youLose = () => {
        setGameOver(true);
    };

    // if the dog is already clicked, set gameOver
    // else set click status of dog and increase score
    const dogClickHandler = (id) => {
        if (dogIsAlreadyClicked(id)) {
            youLose();
        } else {
            clickDog(id);
            incrementScore();
        }
    };

    // fetch dogs using dog API
    const getDogs = async () => {
        try {
            const result = await fetch('https://dog.ceo/api/breeds/image/random/12', { mode: 'cors' });
            const dogData = await result.json();
            const dogItems = processDogs(dogData.message);
            setDogs(dogItems);
        } catch {
            alert('Oop! Failed to retrieve dogs! Try Refreshing the page.');
        };
    };

    // reset the board for new round
    const newRound = () => {
        setScore(0);
        setGameOver(false);
        getDogs();
    };

    // grab dogs on inital mount of Main component
    useEffect(() => {
        getDogs();
    }, []);

    return (
        <div className="Main">
            <GameHeader
                score={score}
                bestScore={bestScore}
            />
            <GameBoard 
                dogs={dogs}
                dogClickHandler={dogClickHandler}
                gameOver={gameOver}

            />
            <GameOverModal 
                newRound={newRound}
                gameOver={gameOver}
            />
            {
                score === 12 && 
                    <WinnerConfetti 
                        newRound={newRound}
                    />
            }

        </div>
    )
}

export default Main
