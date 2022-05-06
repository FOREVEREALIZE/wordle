import { WORDS } from '../constants/wordlist'
import { findFirstUnusedReveal } from './words'

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function getGuess(guesses: string[]) {
    var validWords: String[] = [];
    for (const word in WORDS) {
        if (!findFirstUnusedReveal(word, guesses)) {
            validWords.append(word)
        }
    }
    return(validWords[getRandomInt(validWords.length)].toUpperCase())
}

export default {
    getGuess: getGuess
}