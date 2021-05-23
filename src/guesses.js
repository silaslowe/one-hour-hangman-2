
export const Guesses = ({wrongArray, guessCount}) => {
    return <>
            <h2>Guess Count</h2>
        {wrongArray.length}
        <p style={{textAlign: "center"}}>Guesses</p>
    <div style={{border: "3px solid black", height: "150px", width: "500px", margin: "1rem", display: "grid",   gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gridTemplateRows: "50% 50%"
}}>
        {wrongArray ? wrongArray.map((wrongGuess, i) => <p style={{margin: "1rem", fontSize: "40px"}} key={i}>{wrongGuess}</p>) : null}
        </div>
        </>
}

// "16% 16% 16% 16% 16% 16% 16%"