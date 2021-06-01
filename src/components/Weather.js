import React, { useState, useEffect } from 'react'



const Weather = () => {

    const [loaded, setLoaded] = useState(false);
    const [weatherdata, setWeatherdata] = useState(null)

    useEffect(async () => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=42.5559119&lon=-83.0693446&exclude=current,minutely,alerts&units=imperial&appid=4674ad2852ae817aa25435c591292996'
    const response = await fetch(url)
    const data = await response.json()
    setWeatherdata(data)
    setLoaded(true)
    console.log(data)
    }, [])



    return (
        <>
          <h1></h1>
          <div>{loaded || weatherdata == !null ? 
            <div>
            <div>The temp is {weatherdata.daily[0].feels_like.day}</div>

            </div> : <div>loading</div>}</div>
          <div></div>
        </>
      );

  }
  
  export default Weather;