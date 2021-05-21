import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <a
                href="https://github.com/Dubya-Mick"
                target="_blank"
                rel="noreferrer"
            >
                My Github
            </a>
            {' / '}
            <a
                href="https://dog.ceo/dog-api/"
                target="_blank"
                rel="noreferrer"
            >
                Dog API
            </a>
            {' / '}
            <a
                href="https://github.com/sindresorhus/dog-names"
                target="_blank"
                rel="noreferrer"
            >
                dog-names
            </a>
            {' / '}
            <a
                href="https://github.com/Agezao/confetti-js"
                target="_blank"
                rel="noreferrer"
            >
                Confetti.js
            </a>

        </div>
    )
}

export default Footer
