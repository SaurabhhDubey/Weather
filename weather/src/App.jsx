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
      <div className="bg-[url('/weatherbk.jpg')] h-screen w-full bg-cover bg-center flex items-center justify-center"> 
  <div className="w-full md:w-[60rem] h-auto bg-black opacity-70 border-2 border-white p-5 text-white flex flex-col items-center justify-center relative">
    
    <span className='text-3xl md:text-5xl mb-6'>Weather</span>

    <div className="flex flex-col md:flex-row w-full md:w-auto items-center md:justify-between">
      <input 
        type='text'
        placeholder='Enter Your City'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className='w-11/12 md:w-[20rem] p-2 text-black placeholder-gray-500 border border-gray-300 rounded mb-4 md:mb-0 md:mr-4'
      />
      <button
        onClick={handleSearch}
        className='w-full md:w-auto bg-red-800 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded'>
        Search
      </button>
    </div>

    {error ? (
      <div className="text-lg md:text-2xl text-red-500 mt-6">{error}</div>
    ) : weather ? (
      <div className="mt-6">
        <ul className='text-lg md:text-4xl'>
          <li>Current temperature: {weather.temp_c}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind speed: {weather.wind_kph} kph</li>
          <li>Weather condition: {weather.condition.text}</li>
        </ul>
        <div className='text-2xl md:text-6xl mt-6'>Location: {location}</div>
      </div>
    ) : (
      <div className="text-lg md:text-2xl mt-6">Enter a city and click "Search" to get weather information.</div>
    )}
    
  </div>
</div>
    </>
  );
}


export default App
