import React from 'react';
import './YouWinModal.css';

function YouWinModal({ newRound }) {
    return (
        <div className="modal-overlay">
            <div className="modal-win">
                <div className="modal-content-win">
                    <h1>YOU DID IT! WOOF WOOF AWOOO!</h1>
                    <button className="modal-button-win" onClick={() => newRound()}>Restart</button>
                </div>
            </div>
        </div>
    )
}

export default YouWinModal
