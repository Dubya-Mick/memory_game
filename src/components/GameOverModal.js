import React from 'react'
import './GameOverModal.css'

function GameOverModal({ gameOver, newRound }) {
    return (
        <div className={`modal-overlay ${!gameOver ? "closed" : ''}`}>
            <div className="modal">
                <div className="modal-content">
                    <h1>Awooo! Double clicked that dog!</h1>
                    <button className="modal-button" onClick={() => newRound()}>Restart</button>
                </div>
            
            </div>
        </div>
    )
    
    

}

export default GameOverModal
