import ColorToGuess from "./components/ColorToGuess";
import Header from '../src/components/Header';
import CorrectGuessesInARow from "./components/CorrectGuessesInARow";
import ColorOptions from "./components/ColorOptions";
import { useEffect, useState } from "react";
import WrongGuess from "./components/WrongGuess";
import './App.css'


function App() {
  const [color, setColor] = useState('')
  const [correctColor, setCorrectColor] = useState(0)
  const [wrongGuess, setWrongGuess] = useState(false)
  const [correctGuessesInARow, setCorrectGuessInARow] = useState(0)

  const mockColors = ["#3FA12A", "#DAF378", '#EB4034']; 
  
  

  function handleColors() {
    const randomNum = Math.floor(Math.random() * mockColors.length);
    setColor(mockColors[randomNum])
    console.log(mockColors[randomNum])
  }

useEffect(() => {
  
  handleColors()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  

  function handleSelectColor(selectedColor) {
   

    if(selectedColor === color){
      setCorrectColor(curr => curr + 1)
      setCorrectGuessInARow(curr => curr + 1)
      setWrongGuess(false)
      console.log('right')
    } else {
      setCorrectGuessInARow(0)
      setWrongGuess(true)
      console.log('wrong')
    }
    handleColors();
  }

      return (
    <div className="App">
      <Header />
      <ColorToGuess color={color} />
      <ColorOptions
      color={color} 
      mockColors={mockColors}
      handleSelectColor={handleSelectColor} 
      />
      <CorrectGuessesInARow correctGuessesInARow={correctGuessesInARow} />
      {wrongGuess &&
      <WrongGuess />
      }
    </div>
  );
}

export default App;
