import React from 'react'
import './Hero.css'
import arrowBtn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'     // ✅ ADD THIS
import pause_icon from '../../assets/pause_icon.png'   // ✅ ADD THIS

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <section className="hero">

      <div className="hero-text  fade-up fade-delay-1">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>

      <button className="hero-explore  fade-up fade-delay-2">
        <span>Explore the features</span>
        <img src={arrowBtn} alt="arrow" />
      </button>

      <div className="hero-dot-play fade-up fade-delay-3">
        <ul className="hero-dots">
          {[0, 1, 2].map((index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={heroCount === index ? 'hero-dot orange' : 'hero-dot'}
            ></li>
          ))}
        </ul>

        <div className="hero-play">
          <img
            src={playStatus ? pause_icon : play_icon}
            alt="play-pause"
            onClick={() => setPlayStatus(!playStatus)}   /* ✅ correct toggle */
          />
          <p>See the video</p>
        </div>
      </div>

    </section>
  )
}

export default Hero
