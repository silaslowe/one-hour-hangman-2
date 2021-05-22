import {useRef, useContext} from 'react'
import { Guesses } from './guesses'
import {Letter} from './letter'
import {WordContext} from './wordProvider'

export const Game = ({word}) => {
    const {guessArray, addGuess, wrongArray} = useContext(WordContext)
    const guess = useRef(null)

    return <>
        <form onSubmit={(e) => addGuess(e, guess)} style={{width: "10%", margin: "2rem"}}>
            <label>Guess</label>
            <input 
            type="text"
            ref={guess}
            ></input>
            <button
            >Make a guess</button>
        </form>

        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", border: "3px solid black", width: "65%"}}>
            {
            word.split("").map((l, i) => <Letter key={i} letter={l} guessArray={guessArray}/>)
            }
            </div>
            <Guesses wrongArray={wrongArray} />
    </>
}