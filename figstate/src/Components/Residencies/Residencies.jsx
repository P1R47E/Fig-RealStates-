import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import "swiper/css"
// import "./Residencies.jsx"
import "./Residencies.css"
import { slideSettings } from '../../utils/common'
import data from "../../utils/slider.json"
const Residencies = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className='paddings innerWidth r-container'>
          <div className="r-head flexColStart">
            <span className='orangeText'>best choices</span><span className='primaryText'>Popular residencies</span>
          </div>
          <Swiper {...slideSettings}>
            <SliderButtons/>
            {
              data.map((card,i)=>(
                <SwiperSlide key={i}>
                  <div className = "flexColStart r-card">
                    <img src={card.image} alt="home" />
                    <span className='secondaryText r-price'>
                      <span style={{color : "orange" }}>$</span><span>{card.price}</span>
                    </span>
                    <span className='primaryText'>{card.name}</span>
                    <span className='secondaryText'>{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
    </div>
  )
}

export default Residencies

const SliderButtons = () =>{
  const swiper = useSwiper();
  return (
    <div className='r-button'>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onclick = {() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}