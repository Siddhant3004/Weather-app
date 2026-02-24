"use strict";


const inputbox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weatherImg = document.querySelector(".weather-img");
const temp = document.querySelector(".temperature");
const des = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const location_not_found = document.querySelector(".location-not-found ");
const weather_body=document.querySelector(".weather-body");

async function checkweather(city){
    const apiKey = "c41ef2b6d436f75c1c97c6071e5f360a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData = await fetch(`${url}`).then(response=>response.json());

    console.log(weatherData);

    if(weatherData.cod===`404`){
        // console.log("error");
        weather_body.style.display="none";
        location_not_found.style.display ="flex";
        return;
    }
    temp.innerHTML = `${Math.round(weatherData.main.temp -273.15)}°C`;
    weather_body.style.display="flex";
    des.innerHTML=`${weatherData.weather[0].description}`
    humidity.innerHTML=`${weatherData.main.humidity}%`;
    windSpeed.innerHTML=`${weatherData.wind.speed}km/h`;
    console.log(weatherData);

    switch(weatherData.weather[0].main){
        case 'Cloud':
            weatherImg.src="/images/cloud.png";
            break;
        case 'Clear':
            weatherImg.src="/images/clear.png";
            break;
        case 'Rain':
            weatherImg.src="/images/rain.png";
            break;
        case 'Mist':
            weatherImg.src="/images/Mist.png";
            break;
        case 'Snow':
            weatherImg.src="/images/snow.png";
            break;


    }
}


searchBtn.addEventListener('click',()=>{
    checkweather(inputbox.value);
});


