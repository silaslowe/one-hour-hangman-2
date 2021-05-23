import {useRef, useContext} from 'react'
import { Guesses } from './guesses'
import {Letter} from './letter'
import {WordContext} from './wordProvider'

export const Game = ({word}) => {
    const {guessArray, addGuess, wrongArray, guessCount, wordSet, started} = useContext(WordContext)
    const guess = useRef(null)
    const sortedGuesses = guessArray.sort((a,b) => a-b).join("")
    const sortedWordSet = wordSet.sort((a,b) => a-b).join("")

    console.log("SG", sortedGuesses, "SWS",sortedWordSet)

    return <>
        <form onSubmit={(e) => addGuess(e, guess)} style={{width: "10%", margin: "0  0 1rem 0"}}>
            {/* Loose Condition Met */}
            {wrongArray.length > 5 ? <h2>You Lose Dummy!</h2> : null}
            {/* Win Condition Met */}
            {sortedGuesses === sortedWordSet && started ? <h2>You Win Dummy!</h2> : null}
            <label>Guess</label>
            <input 
            type="text"
            ref={guess}
            ></input>

            <button disabled={wrongArray.length > 5 || sortedGuesses === sortedWordSet}>Make a guess</button>      
        </form>

        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", border: "3px solid black", width: "85%"}}>
            {
            word.split("").map((l, i) => <Letter key={i} letter={l} guessArray={guessArray}/>)
            }
            </div>
            <Guesses wrongArray={wrongArray} guessCount={guessCount} />
    </>
}