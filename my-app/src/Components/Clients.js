import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import fon from './Photo5/ГЛАВНАЯ.svg'
import Plenka1 from './Photo5/1.svg'
import Plenka2 from './Photo/Plenka2.svg'
import Plenka3 from './Photo/3.svg'
import Plenka4 from './Photo/4.svg'
import Plenka5 from './Photo/5.svg'
import Plenka6 from './Photo/6.svg'
import Plenka7 from './Photo/7.svg'
import Plenka8 from './Photo/8.svg'
import BlackDots from './Photo5/klipartz.com - 2020-12-30T120908 1.svg'
import Shy from './Photo5/вапшгри 4.svg'
import Mask from './Photo5/маска картинка.svg'
import BlackFon from './Photo5/Subtract.svg'
import Carousel1 from './Carousel1'
import nextSlide from './Photo/Group 15.svg'
import WhiteArrow from './Photo/отправить.svg'

export default class Clients extends Component {
  render() {
    return (
      <div>
        <Container className="ms-50">
            <h1 style= {{position:"absolute", fontSize:"70px", textAlign:"center", marginTop:"377px" , marginLeft:"730px", fontWeight:"699", zIndex:"1"}}>Наши <br/> клиенты</h1>
            <p style= {{position:"absolute", fontSize:"20px", textAlign:"center", marginTop:"545px" , marginLeft:"700px", zIndex:"1"}}>Давайте проявим пленку, и убедимся<br/> сколько клиентов доверили нам<br/> построение своего кадра (бизнеса)</p>
            <img src={fon} alt="/" style={{position:"relative", marginLeft:"-300px"}}/>
        </Container>
        <Container className="ms-50">
           <h1 style={{position:"absolute", color:"#95DB3A", fontWeight:"699", marginLeft:"90px"}}>Присоединяйтесь и вы!</h1>
           <p style={{position:"absolute",marginLeft:"90px", marginTop:"60px", fontSize:"20px"}}>В этом разделе вы можете познакомиться с некоторыми из наших <br/>
           клиентов. Со многими из них мы работаем на постоянной основе</p>
            <img src={Plenka1} alt="/" style={{position:"absolute", marginTop:"170px",marginLeft:"90px"}}/>
            <img src={Plenka2} alt="/" style={{position:"absolute", marginTop:"170px",marginLeft:"670px"}}/>
            <img src={Plenka3} alt="/" style={{position:"absolute", marginTop:"470px",marginLeft:"90px"}}/>
            <img src={Plenka4} alt="/" style={{position:"absolute", marginTop:"470px",marginLeft:"670px"}}/>
            <img src={Plenka5} alt="/" style={{position:"absolute", marginTop:"770px",marginLeft:"90px"}}/>
            <img src={Plenka6} alt="/" style={{position:"absolute", marginTop:"770px",marginLeft:"670px"}}/>
            <img src={Plenka7}  alt="/"style={{position:"absolute", marginTop:"1070px",marginLeft:"90px"}}/>
            <img src={Plenka8} alt="/" style={{position:"relative", marginTop:"1070px",marginLeft:"670px"}}/>
        </Container>
        <Container className="ms-50">
            <img src={BlackDots} alt="/" style={{position:"absolute",marginLeft:"-150px"}} />
            <img src={Shy} alt="/"style={{position:"absolute",marginLeft:"-200px", marginTop:"-230px",zIndex:"-1"}} />
            <img src={Mask} alt="/" style={{position:"absolute",marginLeft:"50px", marginTop:"100px", zIndex:"1"}} />
            <img src={BlackFon} alt="/" style={{position:"absolute",marginLeft:"-330px", marginTop:"550px", height:"550px"}} />
            <img src={WhiteArrow} alt="/" style={{position:"absolute",marginTop:"653px", marginLeft:"710px", zIndex:"1", transform:"rotate(180deg)"}} />
            <img src={WhiteArrow} alt="/" style={{position:"absolute",marginTop:"648px",marginLeft:"380px" , zIndex:"1" }} />
            <Carousel1 />
        </Container>
      </div>
    )
  }
}