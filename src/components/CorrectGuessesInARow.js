import '../App.css'

function CorrectGuessesInARow({correctGuessesInARow}) {
    
    return (
        <div className="correct-guesses-in-a-row">
            <p data-testid='correct-guesses-in-a-row-text'>Correct guesses in a row: </p>
            <br />
            <p data-testid='correct-guesses-in-a-row-value'>{correctGuessesInARow}</p>
        </div>
    )
}

export default CorrectGuessesInARow
