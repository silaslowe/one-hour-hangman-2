import React, {createContext, useState} from 'react'

export const WordContext = React.createContext()

export const WordProvider = (props) => {
    const [word, setWord] = useState("playee")
    const [guessArray, setGuessArray] = useState([])
    const [wrongArray, setWrongArray] = useState([])
    const wordArray = ['fishes', "catch", "silas"]

    const startGame = () => {
        setWord(wordArray[Math.floor(Math.random() *  wordArray.length)])
        
      }

      const addGuess = (e, guess) => {
        if(!guessArray.includes(guess)) {
        setGuessArray([...guessArray, guess.current.value])
        } else {
          alert("Please guess again")
        }
        e.preventDefault()
        guess.current.value = ""
        
    }
      return <WordContext.Provider value={{word, setWord, startGame, guessArray, addGuess}}>
        {props.children}
      </WordContext.Provider>
}