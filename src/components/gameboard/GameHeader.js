import React from 'react'

function GameHeader({ score, bestScore }) {
    return (
        <div>
            Score {score} / Best: {bestScore}
        </div>
    )
}

export default GameHeader
