import {Game} from './game'
import {Guesses} from './guesses'
import {useContext} from 'react'
import {WordContext} from './wordProvider'


function App() {
const {wrongArray, guessCount} = useContext(WordContext)

  return (<div style={{backgroundColor: "lightblue"}}>
    <Game/>
    <Guesses wrongArray={wrongArray} guessCount={guessCount} />
    </div>
  );
}

export default App;

