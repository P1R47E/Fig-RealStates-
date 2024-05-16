import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
 <section className="hero-wrapper">
    <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="orange-circle"/>
                <h1>
                    Discover<br/>
                     most suitable <br/>
                     properties
                </h1>
            </div>
            <div className="flexColStart hero-des">
                <span className='secondaryText'>find a variety of properties that suit you</span>
                <span className='secondaryText'>forget all difficulties in finding a residence for you</span>
            </div>
            <div className="flexCenter search-bar">
                <HiLocationMarker color="var(--blue)" size={25}/>
                <input type='text'/>
                    <button className='button'>Search</button>
            </div>
            <div className="flexCenter stats">
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={8800} end={9000}  duration ={4} />
                        <span>+</span>
                    </span>
                    <span className='secondaryText' >
                        premium products
                    </span>

                </div>
                <div className="flexColCenter stat">
                    <span>
                        <CountUp start={10900} end={11500}  duration ={4} />
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>
                        Happy customers
                    </span>

                </div>
                <div className="flexColCenter stat">
                    <span>
                        <CountUp end={19} />
                        <span>+</span>
                    </span>
                    <span className='secondaryText'>
                        Award winnings
                    </span>

                </div>
            </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
            <div className="image-container">
                <img src="./hero-image.png" alt="hero image"/>
            </div>
        </div>
    </div>
 </section>
  ) 
}

export default Hero
