import {Game} from './game'
import {useContext} from 'react'
import {WordContext} from './wordProvider'


function App() {
const {word, startGame} = useContext(WordContext)

  return (
    <div className="App" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <h1 style={{textAlign: "center"}}>HANGED PERSON</h1>
      <button onClick={()=> startGame()} style={{width: "10%", margin: "2rem"}}>Start</button>
      <Game word={word}/> 
    </div>
  );
}

export default App;
