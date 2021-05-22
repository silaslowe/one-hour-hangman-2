
export const Guesses = ({wrongArray, guessCount}) => {
    return <>
            <h2>Guess Count</h2>
        {guessCount}
        <p style={{textAlign: "center"}}>Guesses</p>
    <div style={{border: "3px solid black", height: "350px", width: "400px", margin: "1rem", display: "grid",   gridTemplateColumns: "20% 20% 20% 20% 20%", gridTemplateRows: "20% 20% 20% 20% 20% 20%"
}}>
        {wrongArray ? wrongArray.map((wrongGuess, i) => <p style={{margin: "1rem", fontSize: "40px"}} key={i}>{wrongGuess}</p>) : null}
        </div>
        </>
}