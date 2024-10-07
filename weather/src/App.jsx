import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [location, setLocation] = useState(''); // Store location input
  const [weather, setWeather] = useState(null); // Store fetched weather data
  const [error, setError] = useState(null);  


   function fetchWeather(city){
    fetch(`https://api.weatherapi.com/v1/current.json?key=ad28a0a28e824d16b74141613240410&q=${city}&aqi=no`)
    .then(res=> res.json())
    .then(data => {
      if (data.error) {
        setError(data.error.message); // Handle errors such as invalid city
        setWeather(null); // Clear weather data in case of error
      } else {
        setWeather(data.current); // Update state with weather data
        setError(null); // Clear any previous errors
      }
    })
    .catch(err => {
      console.error("Error fetching data", err);
      setError('An error occurred while fetching data');
    });

   }
   
   const handleSearch = () =>{
    if (location){
      fetchWeather(location);
    }
   }



  return (
    <>
      <div className="bg-[url('/weatherbk.jpg')] h-screen w-full bg-cover bg-center"> 
      <div className=" w-[60rem] h-[36rem] bg-black opacity-50 border-2 border-white p-5 text-white flex items-center justify-center absolute inset-0 m-auto">
        <span className='absolute top-4  right-58 text-5xl'>Weather</span>
        <input type='text'
         placeholder='Enter Your City'
         value={location}
         onChange={(e) => setLocation(e.target.value)}
         className='opacity-50  absolute top-24 left-20  text-wrap text-black placeholder-gray-500  border border-gray-300 p-2 rounded'></input>
        <button onClick={handleSearch} className='bg-red-800 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded absolute top-24 left-72'>Search</button>

        {error ? (
            <div className="text-2xl text-red-500 absolute top-48 left-12">{error}</div>
          ) : weather ? (
            <div>
              <ul className='text-4xl absolute left-12 top-48'>
                <li>Current temperature: {weather.temp_c}°C</li>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind speed: {weather.wind_kph} kph</li>
                <li>Weather condition: {weather.condition.text}</li>
              </ul>
              <div className='text-6xl absolute top-96 left-12'>Location: {location}</div>
            </div>
          ) : (
            <div className="text-2xl absolute top-48 left-12">Enter a city and click "Search" to get weather information.</div>
          )}
        </div>
      </div>
    </>
  );
}


export default App
