import React, { useState, useEffect } from 'react'
import './App.css';
import Weather from './components/Weather'

function App() {

  const [loaded, setLoaded] = useState(false);
  const [weatherdata, setWeatherdata] = useState(null);

  useEffect(async () => {
    const token = '4674ad2852ae817aa25435c591292996'
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=42.5559119&lon=-83.0693446&exclude=current,minutely,alerts&units=imperial&appid=${token}`
    const response = await fetch(url)
    const data = await response.json()
    setWeatherdata(data)
    setLoaded(true)
    console.log(data.daily)
  }, []);




  return (
    <div className="App">

          <div>{loaded || weatherdata === !null ? 
              <div className="weather__cards">
                {Object.keys(weatherdata.daily).map((index, key) => (
                <Weather weatherdata={weatherdata} index={index} key={key}></Weather>))}            
              </div> : <div>loading</div>}
          </div>
    


    </div>
  );
}

export default App;
