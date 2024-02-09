let search=document.querySelector('.search');
let cityName=document.querySelector('.city-name');
let temp=document.querySelector('.city');
let Condition=document.querySelector('.condition');
let weatherImg=document.querySelector('.weather-image');
let Hum=document.querySelector('.hum');
let Wind=document.querySelector('.wind');
let Feels=document.querySelector('.feels');




async function airquality(){
    let air='http://api.openweathermap.org/data/2.5/air_pollution?lat=31.1167&lon=76.1333&appid=59199ea1ee5add427df6009cca20140e';
    let data=await fetch(air);
    let response=await data.json()
    console.log(response);
}
airquality();
let city;


async function weather(city){
    let api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=59199ea1ee5add427df6009cca20140e`;
    let data=await fetch(api);
    console.log(data);
    let response=await data.json();
    console.log(response);
    cityName.innerHTML=response.name+ ','+ response.sys.country;
    temp.innerHTML=Math.round(response.main.temp)+'°C';
    Condition.innerHTML=response.weather[0].main;
    Hum.innerHTML=response.main.humidity+'%';
    Wind.innerHTML=response.wind.speed+' Km/h';
    Feels.innerHTML=Math.round(response.main.feels_like)+'°C';


    if(response.weather[0].main=='Clouds'){
        weatherImg.src="./assets/cloud.svg";
    }
    if(response.weather[0].main=='Clear') {
        weatherImg.src="./assets/clear.svg";
    }
    if(response.weather[0].main=='Rain') {
        weatherImg.src="./assets/rain.svg";
    }
    if(response.weather[0].main=='Snow') {
        weatherImg.src="./assets/snow.svg";
    }
    if(response.weather[0].main=='Strom') {
        weatherImg.src="./assets/strom.svg";
    }
    if(response.weather[0].main=='Haze') {
        weatherImg.src="./assets/haze.svg";
    }
    if(response.weather[0].main=='Mist') {
        weatherImg.src="./assets/mist.png";
    }
    

   
 
}


search.addEventListener('change',(e)=>{
    weather(e.target.value);
    

})

