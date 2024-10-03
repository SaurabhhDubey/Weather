import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  return (
    <>
      <div className="bg-[url('/weatherbk.jpg')] h-screen w-full bg-cover bg-center"> 
      <div className=" w-[60rem] h-[36rem] bg-black opacity-50 border-2 border-white p-5 text-white flex items-center justify-center absolute inset-0 m-auto">
        <span className='absolute top-4  right-58 text-5xl'>Weather</span>
        <input type='text' placeholder='Enter Your City' className='opacity-50  absolute top-24 left-20  text-wrap text-black placeholder-gray-500  border border-gray-300 p-2 rounded'></input>
        <button className='bg-red-800 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded absolute top-24 left-72'>Search</button>
        <div>
          <ul className='text-4xl absolute left-12 top-48'>
            <li>Curent temperature :</li>
            <li>Humidity :</li>
            <li>Wind speed :</li>
            <li>Weather condition :</li>
          </ul>
        </div>
      </div>
      </div> 
    </>
  )
}

export default App
