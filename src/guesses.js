export const Guesses = ({wrongArray}) => {
    return <div style={{border: "3px solid black", height: "350px", width: "400px", margin: "1rem"}}>
        <p style={{textAlign: "center"}}>Guesses</p>
        {wrongArray ? wrongArray.map((wrongGuess, i) => <p key={i}>{wrongGuess}</p>) : null}
        </div>
}