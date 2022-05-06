import { WORDS } from '../constants/wordlist'
import { findFirstUnusedReveal } from './words'

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function getGuess(guesses: String[]) {
    var validWords = [];
    for (word in WORDS) {
        if (!findFirstUnusedReveal(word)) {
            validWords.append(word)
        }
    }
    return(validWords[getRandomInt(validWords.length)].toUpperCase())
}

export default {
    getGuess: getGuess
}