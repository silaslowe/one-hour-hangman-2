import React, {createContext, useState} from 'react'

export const WordContext = React.createContext()

export const WordProvider = (props) => {
    const [word, setWord] = useState("playee")
    const [guessArray, setGuessArray] = useState([])
    const [wrongArray, setWrongArray] = useState([])
    const wordArray = ['fishes', "catch", "silas"]
    const [guessCount, setGuessCount] = useState(0)

    const startGame = () => {
        setGuessArray([])
        setWrongArray([])
        setWord(wordArray[Math.floor(Math.random() *  wordArray.length)])
        setGuessCount(0)
      }

      const addGuess = (e, guess) => {
        const guessValue = guess.current.value
        // checkGuessLength(guessValue)
        if(guessArray.includes(guessValue) || guessValue.length > 1 || !guessValue.match(/[a-z]/i)) {
          alert("Please pick a letter you haven't guessed")
        } else {
          setGuessArray([...guessArray, guessValue])
          updateWrongArray(guessValue)
        }
        e.preventDefault()
        guess.current.value = ""
        
    }

    const updateWrongArray = (guess) => {
      if(!word.split("").includes(guess)){
        setWrongArray([...wrongArray, guess])
        setGuessCount(guessCount+1)
      }
    }
      return <WordContext.Provider value={{word, setWord, startGame, guessArray, addGuess, wrongArray, guessCount}}>
        {props.children}
      </WordContext.Provider>
}