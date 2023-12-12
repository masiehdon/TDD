import Color from '../components/Color'

function ColorOptions({mockColors, handleSelectColor, color}) {
    
    return (
        <div data-testid='color-options' style={{display: 'flex'}} >

               {mockColors.map((mockColor, index) => {
                 return      (<div key={index}>
                                <Color color={color} mockColor={mockColor} id={mockColor} handleSelectColor={handleSelectColor} />
                             </div>)})}
                
        </div>
    )
}

export default ColorOptions
