import React, {createContext, useState} from 'react'
const randomWords = require('random-words');


export const WordContext = React.createContext()

export const WordProvider = (props) => {
    const [word, setWord] = useState("")
    const [guessArray, setGuessArray] = useState([])
    const [wrongArray, setWrongArray] = useState([])
    const wordSet = [...new Set(word)]
    const [started, setStarted] = useState(false)

    const startGame = () => {
        setGuessArray([])
        setWrongArray([])
        setWord(randomWords())
        setStarted(true)
      }

      const addGuess = (e, guess) => {
        const guessValue = guess.current.value
        if(guessArray.includes(guessValue) || wrongArray.includes(guessValue) || guessValue.length > 1 || !guessValue.match(/[a-z]/i)) {
          alert("Please pick a letter you haven't guessed")
        } else {
          if(wordSet.includes(guessValue)){
            setGuessArray([...guessArray, guessValue])
          } else {  
          updateWrongArray(guessValue)
        }
      }
        e.preventDefault()
        guess.current.value = ""
        
    }

    const updateWrongArray = (guess) => {
      if(!word.split("").includes(guess)){
        setWrongArray([...wrongArray, guess])
      }
    }

    if(started && word.length < 7) {
      startGame()
    }
    console.log(word)
      return <WordContext.Provider value={{word, setWord, startGame, guessArray, addGuess, wrongArray, wordSet}}>
        {props.children}
      </WordContext.Provider>
}