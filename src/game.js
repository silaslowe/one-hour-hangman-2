import {useRef, useContext} from 'react'
import { Guesses } from './guesses'
import {Letter} from './letter'
import {WordContext} from './wordProvider'

export const Game = ({word}) => {
    const {guessArray, addGuess} = useContext(WordContext)
    const guess = useRef(null)

    
    return <>
        <form onSubmit={(e) => addGuess(e, guess)}>
            <label>Guess</label>
            <input 
            type="text"
            ref={guess}
            ></input>
            <button
            >Make a guess</button>
        </form>

        <div style={{display: "flex", flexDirection: "row"}}>
            {
            word.split("").map((l, i) => <Letter key={i} letter={l} guessArray={guessArray}/>)
            }
            </div>
    </>
}