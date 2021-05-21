import {Game} from './game'
import {useState, useContext} from 'react'
import {WordContext, WordProvider} from './wordProvider'


function App() {
const {word, setWord, startGame} = useContext(WordContext)

  return (
    <div className="App">
      <button onClick={()=> startGame()}>Start</button>
      <Game word={word}/> 
    </div>
  );
}

export default App;
