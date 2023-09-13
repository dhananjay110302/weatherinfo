import React,{useState} from 'react'
import './weather.css'
import search_icon from '../Assests/search.jpg';
import clearsky_icon from '../Assests/clearsky.jpg';
import cloudy_icon from '../Assests/cloud.jpg';
import drizzling_icon from '../Assests/drizzle.jpg';
import humidity_icon from '../Assests/humidity.jpg';
import rainy_icon from '../Assests/rain.jpg';
import snow_icon from '../Assests/snow.jpg';
import wind_icon from '../Assests/wind.jpg';
import bg_icon from '../Assests/bg.jpg';

const Weather=()=> {
  let api_key="3a891c29d7574df22b315033ac99a4ed"
  const [w_icon,setW_icon]=useState(cloudy_icon);
  const search= async()=>{
      const element=document.getElementsByClassName('city_input')
      if(element[0].value==""){
        return 0;
      }
      let url= `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
      let response = await fetch(url);
      let data =await response.json();

      const humidity=document.getElementsByClassName("humidity_percentage")
      const wind = document.getElementsByClassName("wind_speed")
      const weather_temprature=document.getElementsByClassName("weather_temprature")
      const weather_location=document.getElementsByClassName("weather_location")
      humidity[0].innerHTML = data.main.humidity+'%';
      wind[0].innerHTML = data.wind.speed+'km/h';
      weather_temprature[0].innerHTML = data.main.temp+'°C ';
      weather_location[0].innerHTML = data.name;

      if(data.weather[0].icon=="01d" || data.weather[0].icon=="01n" ){
        setW_icon(clearsky_icon)
      }
      else if(data.weather[0].icon=="02d" || data.weather[0].icon=="02n"){
        setW_icon(cloudy_icon)
      }
      else if(data.weather[0].icon=="03d" || data.weather[0].icon=="03n"){
        setW_icon(drizzling_icon)
      }
      else if(data.weather[0].icon=="04d" || data.weather[0].icon=="04n"){
        setW_icon(drizzling_icon)
      }
      else if(data.weather[0].icon=="09d" || data.weather[0].icon=="09n"){
        setW_icon(rainy_icon)
      }
      else if(data.weather[0].icon=="10d" || data.weather[0].icon=="10n"){
        setW_icon(rainy_icon)
      }
      else if(data.weather[0].icon=="13d" || data.weather[0].icon=="13n"){
        setW_icon(snow_icon)
      }
      else{
        setW_icon(clearsky_icon)
      }
  }


  return (
    <div className='body'>
    <div className='container_box'>
      <div className='topbar'>
        <input type ="text" className='city_input' placeholder='search' />
        <div className='search_icon' onClick={()=>{search()}}>
          <img src={search_icon} alt='search' height='40px' />
        </div>
      </div>
      <div className='weather_img'>
        <img src={w_icon} alt='' />
      </div>
      <div className='weather_temprature'>24°C</div>
      <div className='weather_location'>london</div>
      <div className='data_container'>
        <div className='element'>
          <img src={humidity_icon} alt='' className='icon' height={'50px'} />
          <div className='data'>
            <div className='humidity_percentage'>64%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt='' className='icon' height={'50px'} />
          <div className='data'>
            <div className='wind_speed'>18 km/H</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Weather