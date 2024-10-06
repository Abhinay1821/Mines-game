import './App.css';
import React from 'react'
import Button from './Button';

const valueArray = Array(25).fill('HEERA')
function randomArrayFiller() {
  for (let i = 0; i < 3; i++) {
    const index = Math.floor(Math.random() * 25)
    console.log(index)
    if (valueArray[index] === 'HEERA') {
      valueArray[index] = 'BOMB'
    }
  }

}
function App() {
  const [box, setBoxes] = React.useState(Array(25).fill(''))
  const [bomb, setBomb] = React.useState(false)

  React.useEffect(() => {
    randomArrayFiller()
  }, [])

  const handleBoxClick = (index) => {
    if (bomb || box[index]) return
    const newArray = [...box]
    if (valueArray[index] === 'BOMB') {
      setBomb(true)
      setBoxes(valueArray)
    }
    else {
      newArray[index] = valueArray[index]
      setBoxes(newArray)
    }

  }
  return (
    <div className="App">
      <div className='grid-container'>
        <div className='row-container'>
          <Button value={box[0]} onButtonClick={() => handleBoxClick(0)} />
          <Button value={box[1]} onButtonClick={() => handleBoxClick(1)} />
          <Button value={box[2]} onButtonClick={() => handleBoxClick(2)} />
          <Button value={box[3]} onButtonClick={() => handleBoxClick(3)} />
          <Button value={box[4]} onButtonClick={() => handleBoxClick(4)} />
        </div>
        <div className='row-container'>
          <Button value={box[5]} onButtonClick={() => handleBoxClick(5)} />
          <Button value={box[6]} onButtonClick={() => handleBoxClick(6)} />
          <Button value={box[7]} onButtonClick={() => handleBoxClick(7)} />
          <Button value={box[8]} onButtonClick={() => handleBoxClick(8)} />
          <Button value={box[9]} onButtonClick={() => handleBoxClick(9)} />
        </div>
        <div className='row-container'>
          <Button value={box[10]} onButtonClick={() => handleBoxClick(10)} />
          <Button value={box[11]} onButtonClick={() => handleBoxClick(11)} />
          <Button value={box[12]} onButtonClick={() => handleBoxClick(12)} />
          <Button value={box[13]} onButtonClick={() => handleBoxClick(13)} />
          <Button value={box[14]} onButtonClick={() => handleBoxClick(14)} />
        </div>
        <div className='row-container'>
          <Button value={box[15]} onButtonClick={() => handleBoxClick(15)} />
          <Button value={box[16]} onButtonClick={() => handleBoxClick(16)} />
          <Button value={box[17]} onButtonClick={() => handleBoxClick(17)} />
          <Button value={box[18]} onButtonClick={() => handleBoxClick(18)} />
          <Button value={box[19]} onButtonClick={() => handleBoxClick(19)} />
        </div>
        <div className='row-container'>
          <Button value={box[20]} onButtonClick={() => handleBoxClick(20)} />
          <Button value={box[21]} onButtonClick={() => handleBoxClick(21)} />
          <Button value={box[22]} onButtonClick={() => handleBoxClick(22)} />
          <Button value={box[23]} onButtonClick={() => handleBoxClick(23)} />
          <Button value={box[24]} onButtonClick={() => handleBoxClick(24)} />
        </div>
        {bomb && <h1>It's a Bomb. Game Over BSDK!</h1>}
      </div>

    </div>
  );
}

export default App;
