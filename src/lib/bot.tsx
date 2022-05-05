import { WORDS } from '../constants/wordlist'

function getGuess(pattern: RegExp) {
    const validWords = WORDS.filter((word) => word.match(pattern))
    return(validWords[Math.random(validWords.length)])
}

export default {
    getGuess: getGuess
}