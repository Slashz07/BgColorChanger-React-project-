import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

const [color,setColor]=useState("blue")

  return (
 
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='flex justify-center flex-wrap  fixed bottom-4 inset-x-2 px-2'>
        <div className='flex flex-wrap gap-6 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button
            className='rounded-full px-4 py-1 '
            style={{ backgroundColor: 'red' }}
            onClick={()=>setColor('red')}
          >Red</button>
          <button
            className='rounded-full px-4 py-1'
            style={{ backgroundColor: 'blue' }}
            onClick={()=>setColor('blue')}
          >blue</button>
          <button
            className='rounded-full px-4 py-1'
            style={{ backgroundColor: 'green' }}
            onClick={()=>setColor('green')}
          >green</button>
          <button
            className='rounded-full px-4 py-1'
            style={{ backgroundColor: 'yellow' }}
            onClick={()=>setColor('yellow')}
          >yellow</button>
          <button
            className='rounded-full px-4 py-1'
            style={{ backgroundColor: 'pink' }}
            onClick={()=>setColor('pink')}
          >pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
