
export const Guesses = ({wrongArray}) => {
    return <>
            <h2>Guess Count</h2>
        {6 - wrongArray.length}
        <p style={{textAlign: "center"}}>Guesses</p>
    <div style={{border: "3px solid black", height: "75px", width: "500px", margin: "1rem", display: "grid",   gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr", gridTemplateRows: "100%"
}}>
        {wrongArray ? wrongArray.map((wrongGuess, i) => <p style={{margin: "1rem", fontSize: "40px"}} key={i}>{wrongGuess}</p>) : null}
        </div>
        </>
}

// "16% 16% 16% 16% 16% 16% 16%"