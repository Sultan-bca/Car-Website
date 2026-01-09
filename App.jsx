import { useState } from 'react'
import './App.css'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

function App() {

  const heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}   // ✅ FIX
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
    </div>
  )
}

export default App
