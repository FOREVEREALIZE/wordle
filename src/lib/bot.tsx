import { WORDS } from '../constants/wordlist'

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

function getGuess(pattern: RegExp) {
    const validWords = WORDS.filter((word) => word.match(pattern))
    return(validWords[getRandomInt(validWords.length)].toUpperCase())
}

export default {
    getGuess: getGuess
}