export const Guesses = ({wrongArray}) => {
    console.log("WA", wrongArray)
    return <div>
        <p>Guesses</p>
        {wrongArray ? wrongArray.map((wrongGuess, i) => <p key={i}>{wrongGuess}</p>) : null}
        </div>
}