import {useRef, useContext} from 'react'
import { Guesses } from './guesses'
import {Letter} from './letter'
import {WordContext} from './wordProvider'

export const Game = ({word}) => {
    const {guessArray, addGuess, wrongArray, guessCount, wordSet} = useContext(WordContext)
    const guess = useRef(null)

    return <>
        <form onSubmit={(e) => addGuess(e, guess)} style={{width: "10%", margin: "0  0 1rem 0"}}>
            {wrongArray.length > 5 ? <h2>You Lose Dummy!</h2> : null}
            {guessArray.sort((a,b) => a+b).join() === wordSet.sort((a,b) => a+b).join() ? <h2>You Win Dummy!</h2> : null}
            <label>Guess</label>
            <input 
            type="text"
            ref={guess}
            ></input>

            <button disabled={wrongArray.length > 5 || guessArray.sort((a,b) => a+b).join() === wordSet.sort((a,b) => a+b).join()}>Make a guess</button>      
        </form>

        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", border: "3px solid black", width: "65%"}}>
            {
            word.split("").map((l, i) => <Letter key={i} letter={l} guessArray={guessArray}/>)
            }
            </div>
            <Guesses wrongArray={wrongArray} guessCount={guessCount} />
    </>
}