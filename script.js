/*
JavaScript Code Explanation.

1. api key and  api URl are taken from Open weather map 
 and made into constantvariables.


2. seacrhBox , searchBtn , weatherIcon is exported from HTMl and imported to 
JS using these codes:

const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon= document.querySelector(".weather-icon");


3. event listener is added to the submit button using the code: 
 
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

4.when searchBtn is clicked checkWeather funtion will run. 
which will fetch the apiUrl , api key ,and the city name using fetch function 
and will store it in a variable-response.

for this async - await functions are used of asyncJS.

5. after fetching the checkWeather function will check if a valid city is input 
by user using matching the status code response.status==404.
if invalid city is input then error is displayed and weather div is made hidden 
using display: none in CSS.

6. else if response.status!=404
then the var data = response.json() is used to get the data from the response object.
which is stored in the json file .


7. all the data variables are expoerted to JS using document.queryListener
and displayed on the screen using innerHtml .
as follows


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


8. now to change the image of the weather 
icon we use the weatherIcon variable and set the src attribute
of the image to the icon url.
before this it must be checked what weather it is for that 
so for that 

if(data.weather[0].main== "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }

9. finally as the city name was valid weather div's display is set to block 
and error div's display is set to none - so as to not show the error.

*/
    const apiKey="d5359adaee91246be4c76d7a13fa005f";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon= document.querySelector(".weather-icon");
    async function checkWeather(city) {
        const response= await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status==404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
        var data= await response.json();
        console.log(data);
        

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main== "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main== "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main== "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main== "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main== "Mist"){
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
}
    }


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
    
