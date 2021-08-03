import { useState } from "react";
import ModeSymbol from "./components/ModeSymbol";
import Screen from "./components/Screen";


function App() {
  const [state, setState] = useState(16)
  const [mode, setMode] = useState('hide')
  const [tempColor, setTempColor] = useState('#838383')

  const modeHandle = () => {
    setTimeout(() => {
      if (mode === 'hide') {
        setMode('show')
        setTimeout(() => {
          setTempColor('#CAE6FF')
        }, 200)
      } else {
        setMode('hide')
        setTimeout(() => {
          setState(16)
          setTempColor('#838383')
        }, 500)
      }
    }, 500)
  }

  const decrease = () => {
    if (state === 0) return
    setState(state - 1);
    if (state < 20) {
      setTempColor('#CAE6FF')
    }
  }

  const increase = () => {
    if (state === 32) return
    setState(state + 1);
    if (state >= 20) {
      setTempColor('#ffbd84')
    }
  }

  return (
    <div className="main-container">
      <div className="remote-control-body">
        <Screen tempColor={tempColor} mode={mode} degree={state} />
        <div className="control-btn">
          <button className="decrease-btn" onClick={decrease}>-</button>
          <ModeSymbol modeHandle={modeHandle} />
          <button className="increase-btn" onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
