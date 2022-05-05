import { WORDS } from '../constants/wordlist'

export function getGuess(pattern: RegExp) {
    const validWords = WORDS.filter((word) => word.match(pattern))
    return(validWords[Math.random(validWords.length)])
}