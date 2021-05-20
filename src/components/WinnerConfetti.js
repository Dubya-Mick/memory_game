import React, { useEffect } from 'react';
import ConfettiGenerator from 'confetti-js';
import './WinnerConfetti.css';
import YouWinModal from './gameboard/YouWinModal';

function WinnerConfetti({ newRound }) {

    useEffect(() => {
        const settings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(settings);
        confetti.render();
        
        return () => confetti.clear();
    }, []);

    return (
        <div>
            <div className="confetti">
                <canvas id="my-canvas"></canvas>
            </div>
            <YouWinModal 
                newRound={newRound}
            />
        </div>
    )
}

export default WinnerConfetti
