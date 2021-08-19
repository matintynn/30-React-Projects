import { useState } from "react"

function App() {
  const [hori, setHori] = useState(9)
  const [verti, setVerti] = useState(42)
  const [blur, setBlur] = useState(74)
  const [spread, setSpread] = useState(-37)
  // const [color, setColor] = useState('#808080')
  const [opacity, setOpacity] = useState('5')
  const [checkOn, setCheckOn] = useState(false)

  return (
    <div className="body">
      <h2>Box-shadow <span className="title">Generator</span></h2>
      <div className="gen-container">
        {/* Controls */}
        <div className="controls">
          <div className="horizontal">
            <label>Horizontal</label>
            <input
              type="range"
              id="test1"
              min="-200" max="200"
              value={hori}
              onChange={e => setHori(e.target.value)}
            />
          </div>
          <div className="horizontal">
            <label>Vertical</label>
            <input
              type="range"
              id="test2"
              min="-200" max="200"
              value={verti}
              onChange={e => setVerti(e.target.value)}
            />
          </div>
          <div className="blur">
            <label>Blur</label>
            <input
              type="range"
              id="test3"
              min="0" max="300"
              value={blur}
              onChange={e => setBlur(e.target.value)}
            />
          </div>
          <div className="spread">
            <label>Spread</label>
            <input
              type="range"
              id="test4"
              min="-100" max="200"
              value={spread}
              onChange={e => setSpread(e.target.value)}
            />
          </div>

          <div className="opacity">
            <label>Opacity</label>
            <input
              type="range"
              id="test7"
              min="0" max="9"
              value={opacity}
              onChange={e => setOpacity(e.target.value)}
            />
          </div>
          <div class="switch">
            <label>
              Outline
              <input type="checkbox" checked={checkOn} onClick={() => setCheckOn(!checkOn)} />
              <span class="lever"></span>
              Inset
            </label>
          </div>
        </div>

        {/* Output */}
        <div className="output">
          <div className="box" style={{ boxShadow: `${checkOn ? "inset" : ""} ${hori}px ${verti}px ${blur}px ${spread}px rgba(0, 0, 0, 0.${opacity})` }}>
            {checkOn ? <p>box-shadow: <span>inset</span> <span>{hori}</span>px <span>{verti}</span>px <span>{blur}</span>px <span>{spread}</span>px rgba(0, 0, 0, 0.<span>{opacity}</span>);</p> :
              <p>box-shadow: <span>{hori}</span>px <span>{verti}</span>px <span>{blur}</span>px <span>{spread}</span>px rgba(0, 0, 0, 0.<span>{opacity}</span>);</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
