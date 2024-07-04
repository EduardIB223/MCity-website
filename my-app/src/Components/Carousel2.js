import React, { Component } from 'react'
import './css/slider.css'
import Plenka2 from './Photo/Plenka2.svg'
import Plenka3 from './Photo/3.svg'
import Plenka4 from './Photo/4.svg'
import Plenka5 from './Photo/5.svg'
import Plenka6 from './Photo/6.svg'
import Plenka7 from './Photo/7.svg'
import Plenka8 from './Photo/8.svg'
import Plenka9 from './Photo/2.svg'
import { Carousel, CarouselCaption,CarouselItem } from 'react-bootstrap'


function FirstCarousel() {
    return (
        <>
      <div >
        <Carousel className='first-carousel'>
              <CarouselItem>
                <img src={Plenka2} alt="/" style={{ marginLeft:"328px", marginTop:"212px", zIndex:"3", width:"450px" }}/>
              </CarouselItem>
              <CarouselItem>
                <img src={Plenka9} alt="/" style={{ marginLeft:"328px", marginTop:"212px", zIndex:"3", width:"450px" }}/>
              </CarouselItem>
              <CarouselItem>
                <img src={Plenka3} alt="/" style={{ marginLeft:"328px", marginTop:"212px", zIndex:"3", width:"450px" }}/>
              </CarouselItem>
              <CarouselItem>
                <img src={Plenka4} alt="/" style={{ marginLeft:"328px", marginTop:"212px", zIndex:"3", width:"450px" }}/>
              </CarouselItem>
              <CarouselItem>
                <img src={Plenka5} alt="/" style={{ marginLeft:"328px", marginTop:"212px", zIndex:"3", width:"450px" }}/>
              </CarouselItem>
              <CarouselItem>
                <img src={Plenka6} alt="/" style={{ marginLeft:"328px", marginTop:"212px", zIndex:"3", width:"450px" }}/>
              </CarouselItem>
              <CarouselItem>
                <img src={Plenka7} alt="/" style={{ marginLeft:"328px", marginTop:"212px", zIndex:"3", width:"450px" }}/>
              </CarouselItem>
              <CarouselItem>
                <img src={Plenka8} alt="/" style={{ marginLeft:"328px", marginTop:"212px", zIndex:"3", width:"450px" }}/>
              </CarouselItem>
            </Carousel>
      </div>
      </>
    )
  }
  export default FirstCarousel

