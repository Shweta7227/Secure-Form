import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from "./pages/Register";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Register />
    </div>

  //   <div className="min-h-screen flex items-center justify-center bg-black text-green-400 text-3xl font-bold">
  //   </div>
  )
}

export default App
