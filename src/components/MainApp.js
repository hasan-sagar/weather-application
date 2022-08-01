import axios from "axios";
import React, { useState } from "react";
import "./MainApp.css"

function dateFunction (d) {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    let month = months[d.getMonth()];

    let a = new Date();
    let day = a.getDate();

    let year = a.getFullYear()

    return `${month} ${day}, ${year}`
}

export default function MainApp(){
    const [location , setLocation] = useState("")
    const [weatherData, setWeatherData] = useState({})

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8e3dd6efd60bf5cfe050f7fbd55a8e46`

    const search = (event) =>{
        if(event.key === 'Enter'){
            axios.get(weatherUrl)
            .then((response)=>{
                setWeatherData(response.data)
            })
             setLocation("")
        }
    }
    

    return(
    <main>
        <section>
            <h1>Weather Application</h1>
        </section>
        <section className="search">
            <input 
            type="text"
            placeholder="Enter Location..."
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyDown={search}
            />
        </section>
        <section className="main-weather">
            <div className="location-section">
                <section className="location">{weatherData.name}</section>
                <section className="date">{dateFunction(new Date())}</section>
            </div>
            <div className="weather-section">
                {
                    weatherData.main ?
                    (<section className="temperature">
                        { weatherData.main.temp.toFixed()}°C
                    </section>):null
                }
                
                <section className="weather">
                    {weatherData.main ? <p>{weatherData.weather[0].main}</p>:null}
                </section>
            </div>
        </section>
    </main>
    )
}