import axios from "axios";
import React, { useState } from "react";
import "./MainApp.css"
import hotPic from "../assets/hot.png"
import freezePic from "../assets/freezing.png"
import humidityPic from "../assets/humidity.png"
import windPic from "../assets/wind.png"

function dateFunction(d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = months[d.getMonth()];

    let a = new Date();
    let day = a.getDate();

    let year = a.getFullYear()

    return `${month} ${day}, ${year}`
}

export default function MainApp() {
    const [location, setLocation] = useState("")
    const [weatherData, setWeatherData] = useState({})

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=8e3dd6efd60bf5cfe050f7fbd55a8e46`

    const search = (event) => {
        if (event.key === 'Enter') {
            axios.get(weatherUrl)
                .then((response) => {
                    setWeatherData(response.data)
                })
            setLocation("")
        }
    }


    return (
        // <main>
        //     <section>
        //         <h1>Weather Application</h1>
        //     </section>
        //     <section className="search">
        //         <input 
        //         type="text"
        //         placeholder="Enter Location..."
        //         value={location}
        //         onChange={(event) => setLocation(event.target.value)}
        //         onKeyDown={search}
        //         />
        //     </section>
        //     <section className="main-weather">
        //         <div className="location-section">
        //             <section className="location">{weatherData.name}</section>
        //             <section className="date">{dateFunction(new Date())}</section>
        //         </div>
        //         <div className="weather-section">
        //             {
        //                 weatherData.main ?
        //                 (<section className="temperature">
        //                     { weatherData.main.temp.toFixed()}°C
        //                 </section>):null
        //             }

        //             <section className="weather">
        //                 {weatherData.main ? <p>{weatherData.weather[0].main}</p>:null}
        //             </section>
        //         </div>
        //     </section>
        // </main>
        <>
            <div className="w-full h-screen bg-[#dbe4ee] flex justify-center items-center">
                <div className="text-center overflow-hidden absolute top-10 left-[50rem] flex justify-center items-center mb-9">
                    <input type="text"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        onKeyDown={search} name="city" className="w-80 p-2 text-black rounded-sm outline-none border-none text-center" placeholder="enter city..." />
                </div>
                <div className="w-1/4 h-[80vh] bg-[#03256c] rounded-3xl shadow-xl shadow-slate-800">
                    <div className="relative overflow-hidden w-full h-1/2 rounded-t-3xl">
                        <img src="https://images.unsplash.com/photo-1536532184021-da5392b55da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="absolute top-0 left-0 w-full h-full opacity-75" />
                        {/* weather data */}
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-4">
                            {/* location */}
                            <div className="text-2xl text-white font-medium text-center uppercase">{weatherData.main?weatherData.name:''}</div>
                            <div className="text-5xl text-white font-bold text-center"> {weatherData.main?weatherData.main.temp:''}°C
                            </div>
                        </div>
                        {/* weather data */}
                    </div>
                    <div className="relative overflow-hidden w-full h-1/2 p-1 flex flex-col ">
                        {/* more-info-label */}
                        {/* <div class="text-white">Information</div> */}
                        {/* more-info-container */}
                        <div className="flex flex-row flex-wrap flex-1 mt-5 text-center">
                            {/* info-block */}
                            <div className="w-1/2 flex flex-row text-center">
                                {/* info-block-label */}
                                <div className="w-1/2 flex flex-col justify-center items-center">
                                    <img src={hotPic} className="w-7" />
                                    <span className="text-white text-sm ml-1">Min</span>
                                </div>
                                {/* info-block-value */}
                                <div className="w-1/2 flex justify-start items-center text-white">
                                {weatherData.main?weatherData.main.temp_min:''}°C
                                </div>
                            </div>
                            {/* info-block */}
                            <div className="w-1/2 flex flex-row text-center">
                                {/* info-block-label */}
                                <div className="w-1/2 flex flex-col justify-center items-center">
                                    <img src={freezePic} className="w-7" />
                                    <span className="text-white text-sm ml-1">Max</span>
                                </div>
                                {/* info-block-value */}
                                <div className="w-1/2 flex justify-start items-center text-white">
                                {weatherData.main?weatherData.main.temp_max:''}°C
                                </div>
                            </div>
                            {/* info-block */}
                            <div className="w-1/2 flex flex-row text-center">
                                {/* info-block-label */}
                                <div className="w-1/2 flex flex-col justify-center items-center">
                                    <img src={humidityPic} className="w-7" />
                                    <span className="text-white text-sm">Humidity</span>
                                </div>
                                {/* info-block-value */}
                                <div className="w-1/2 flex justify-start items-center text-white">
                                {weatherData.main?weatherData.main.humidity:''}°C
                                </div>
                            </div>
                            {/* info-block */}
                            <div className="w-1/2 flex flex-row text-center">
                                {/* info-block-label */}
                                <div className="w-1/2 flex flex-col justify-center items-center">
                                    <img src={windPic} className="w-7" />
                                    <span className="text-white text-sm">Wind</span>
                                </div>
                                {/* info-block-value */}
                                <div className="w-1/2 flex justify-start items-center text-white">
                                   {weatherData.wind?weatherData.wind.speed:''} km/h
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}