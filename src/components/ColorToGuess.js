import '../App.css'


function ColorToGuess({color}) {
    
    return (
        <div 
        className="box"
        data-testid='color-to-guess' 
        style={{
            backgroundColor: color, 
        height: '250px', width: '250px'
        }} 
        >
        </div>
    )
}

export default ColorToGuess
