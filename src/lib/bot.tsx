import { WORDS } from '../constants/wordlist'
import { findFirstUnusedReveal } from './words'

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function getGuess(guesses: string[]) {
    const valid = getValidWords(guesses)
    return(valid[getRandomInt(valid.length)].toUpperCase())
}

function getValidWords(guesses: string[]): string[] {
    var validWords: string[] = [];
    for (const word in WORDS) {
        if (!findFirstUnusedReveal(word, guesses)) {
            validWords.push(word)
        }
    }
    return validWords;
}

export default {
    getGuess: getGuess
}