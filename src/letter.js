export const Letter = ({letter, guessArray}) => {

    return <>
        {
            guessArray.includes(letter) 
            ? 
            <div style={{display: "flex", alignItems: "center", justifyContent: "center",height: "75px", width: "75px", border: "3px solid black", margin: "1rem 1rem"}}>
                 <p style={{ fontSize: "40px"}}>{letter}</p>
            </div>    
            : <div style={{height: "75px", width: "75px", border: "3px solid black", margin: "1rem 1rem"}}></div>
        }
</>
}