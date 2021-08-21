import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl';
import icon from "./airplane.svg"

function App() {
  const [airportData, setAirportData] = useState([])
  const [isSelected, setIsSelected] = useState(null)
  // set windowWidth & height for responsive
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  // helper func to set Window width & height
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  // re-render window viewport
  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    // cleanup func
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  // define viewport
  const [viewport, setViewport] = React.useState({
    latitude: 10.762622,
    longitude: 106.660172,
    // either set width & height here or pass props
    // width: window.innerWidth,
    // height: window.innerHeight,
    zoom: 8
  });

  // fetch data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://raw.githubusercontent.com/mwgg/Airports/master/airports.json")
      const data = await response.json()
      const holdingArr = []
      Object.keys(data).map(key => (
        holdingArr.push(data[key])
      ))
      setAirportData(holdingArr.filter(ap => ap.country === "VN"))
    }
    fetchData()
  }, [])

  //set navigation control position
  const navControlStyle = {
    right: 25,
    top: 25,
    zIndex: 1000
  };

  return (
    <div className="App">
      <ReactMapGL
        // mapStyle="mapbox://styles/matintynn/cksm4i9020uye18rw5ovf0h7q"
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={(viewport) => setViewport(viewport)}
        // the width & height will depend on the new render, so the map will be responsive
        width={windowWidth}
        height={windowHeight}
      >
        <NavigationControl style={navControlStyle} />
        {airportData.map(ap =>
          <Marker
            latitude={ap.lat}
            longitude={ap.lon}>
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault()
                setIsSelected(ap)
              }}
            >
              <img src={icon} alt="airplane icon" />
            </button>
          </Marker>
        )}

        {isSelected ? (
          <Popup
            latitude={isSelected.lat}
            longitude={isSelected.lon}
            onClose={() => setIsSelected(null)}
          >
            <div>
              <h4>{isSelected.name}</h4>
              <p><small>City: {isSelected.city}</small></p>
              <p><small>Latitute: {isSelected.lat}</small></p>
              <p><small>Longtitute: {isSelected.lon}</small></p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default App;
