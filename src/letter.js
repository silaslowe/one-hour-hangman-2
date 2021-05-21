export const Letter = ({letter, guessArray}) => {
    console.log("GA", guessArray)

    return <>
        {
            guessArray.includes(letter) 
            ? 
            <div style={{display: "flex", alignItems: "center", justifyContent: "center",height: "75px", width: "75px", border: "3px solid black"}}>
                 <p style={{ fontSize: "40px"}}>{letter}</p>
            </div>    
            : <div style={{height: "75px", width: "75px", border: "3px solid black"}}></div>
        }
</>
}