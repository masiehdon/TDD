import '../App.css'

function Color({mockColor, handleSelectColor, color, id}) {
    
    return (
        <div className="button-box">
         <button className='btn' onClick={() => handleSelectColor(id, color)} id={id} >{mockColor}</button>
        </div>
    )
}

export default Color
