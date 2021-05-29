import {useRef, useContext} from 'react'
import { Guesses } from './guesses'
import {Letter} from './letter'
import {WordContext} from './wordProvider'

export const Game = () => {
    const {guessArray, addGuess, wrongArray, guessCount, wordSet, started, startGame, word} = useContext(WordContext)
    const guess = useRef(null)
    const sortedGuesses = guessArray.sort().join("")
    const sortedWordSet = wordSet.sort().join("")
    console.log(guessArray, wordSet)
    console.log("SG", sortedGuesses, "SWS",sortedWordSet)

    return <>
        <div  
          style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1 
              style={{textAlign: "center"}}>HANGED PERSON</h1>
            <button 
              onClick={()=> startGame()}
              style={{width: "10%", padding: "1rem", borderRadius: "10px"}}>{started ? "New Word" : "Start Game"}</button>
        </div>
          <form onSubmit={(e) => addGuess(e, guess)} style={{width: "10%", margin: "0  0 1rem 0"}}>
            {/* Loose Condition Met */}
            {wrongArray.length > 5 ? <h2>You Lose Dummy!</h2> : null}
            {/* Win Condition Met */}
            {sortedGuesses === sortedWordSet && started ? <h2>You Win Dummy!</h2> : null}
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
              <input 
                type="text"
                style={{display: "flex", alignItems: "center", justifyContent: "center", height: "75px", width: "75px", fontSize: "40px", margin: "1rem"}}
                ref={guess}
                />
            <button 
                style={{padding: "1rem", borderRadius: "10px"}}
                disabled={wrongArray.length > 5 || sortedGuesses === sortedWordSet}>Make a guess</button>      
            </div>  
        </form>

        <div 
            style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItem: "center", height: "100px", width: "85%"}}>
            {
            word.split("").map((l, i) => <Letter key={i} letter={l} guessArray={guessArray}/>)
            }
            </div>
            
    </>
}