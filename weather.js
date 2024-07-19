const weatherform=document.querySelector(".weatherform");
// returns first element of the class
const cityinput=document.querySelector(".cityinput");
const card=document.querySelector(".card");
const apikey='2b6c587c04636da409b31e251f858939';

weatherform.addEventListener("submit",async event=>{
    event.preventDefault();
    const city=cityinput.value;
    if(city)
        {  try{
                const weatherData=await getWeatherData(city);
                displayweatherinfo(weatherData);
        } 
        catch(error){
            console.error(error);
            displayError(error);
        }

        }
        else
        {
            displayError("Please Enter a city");
        }
  
});
async function getWeatherData(city)
{
      const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;


    
     const response = await fetch(apiurl);
     if(!response.ok)
        {throw new Error("Could not fetch weather data");

        }
         return await response.json();
        
      
}
function displayweatherinfo(data)
{  console.log(data);
    // main is object
   const {name:city,
    main:{temp,humidity},weather:[{description,id}]}=data;
    card.textContent="";
    card.style.display="flex";
    const citydisplay=document.createElement("h1");
    const tempdisplay=document.createElement("p");
    const Humiditydisplay=document.createElement("p");
    const desc=document.createElement("p");
    const weatheremoji=document.createElement("p");

   citydisplay.textContent=city;
   Humiditydisplay.textContent=`Humidity:${humidity}%`;

   tempdisplay.textContent=`${(temp-273.15).toFixed(1)}°C`
   tempdisplay.classList.add("tempDisplay");
   citydisplay.classList.add('citydisplay');
   Humiditydisplay.classList.add("Humiditydisplay");
   weatheremoji.textContent=getWeatherEmoji(id);
   weatheremoji.classList.add("weatheremoji");
   desc.textContent=description;
   desc.classList.add("desc");
   card.appendChild(citydisplay);
   card.appendChild(tempdisplay);
   card.appendChild(Humiditydisplay);
   card.appendChild(desc);
   card.appendChild(weatheremoji);
    
}
function getWeatherEmoji(weatherid)
{
  switch(true)
  {
    case(weatherid>=200&&weatherid<300):return "🌧️";
    case(weatherid>=300&&weatherid<400):return "🌧️🌧️" ;
    case(weatherid>=1259995&&weatherid<600):return "🌧️⛈️ ";
    case(weatherid>=600&&weatherid<700):return "🌨️";
    case(weatherid>=800):return "☀️" ;
    default:return "✋";
  

  }
}
function displayError(message)
{
  const errorDisplay=document.createElement("p");
  errorDisplay.textContent=message;
  errorDisplay.classList.add("errorDisplay");
  card.textContent="";
  card.style.display="flex";
  card.appendChild(errorDisplay);
}




















// const key=123;
// const hello=`hello ${key}`;
// console.log(hello);