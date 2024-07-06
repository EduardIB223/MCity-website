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
import FooterBG from './Photo/Rectangle 106.svg'
import logo from './Photo/logo.svg';
import tochka from './Photo/Ellipse 3.svg';
import FooterDot from './Photo/Group 19.svg'
import Oblako7 from './Photo/M сити2.svg'
import Svechenie4 from './Photo/вапшгри 7.svg'
import GreenDot from './Photo/Mask Group2.svg'
import Phone from './Photo/Group 137.svg'
import kvadratik from './Photo/Rectangle 12.svg';
import polosochka from './Photo/Rectangle 11.svg';

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
            <img src={nextSlide} alt="/" style={{position:"absolute",marginTop:"638px", marginLeft:"750px", zIndex:"1" }} />
            <img src={WhiteArrow} alt="/" style={{position:"absolute",marginTop:"648px",marginLeft:"340px" , zIndex:"1" }} />
            <Carousel1 />
        </Container>
        <Container className="ms-50">
            <img src={Oblako7} alt="/" style={{position:"absolute", marginLeft:"800px", marginTop:"-70px", zIndex:"2"}} />
            <img src={Svechenie4} alt="/" style={{marginLeft:"700px", zIndex:"-4", marginTop:"-70px"}} />
            <img src={GreenDot} alt="/" style={{position:"absolute", marginLeft:"800px", marginTop:"-880px", zIndex:"-2" }} />
            <p style={{position:"absolute", marginTop:"-310px", fontSize:"20px", marginLeft:"30px"}} >За 12 лет мы накопили огромный опыт в разработке сайтов и<br/> интернет-магазинов. Для большинства задач уже разработаны<br/> готовые решения конкретно под вашу отрасль и тип бизнеса, что <br/> позволяет сократить расходы и время на запуск.<br/><br/>

Мы подберём или разработаем оптимальное решение для вас. <br/>Просто напишите нам или позвоните чтобы обсудить проект.</p>
            <img src={Phone} alt="/" style={{position:"absolute", marginTop:"20px", marginLeft:"20px"}} />
            <h1 style={{position:'absolute', marginLeft:'350px', fontSize:"25px", fontWeight:"699"}} >Получите бесплатную <br/> консультацию</h1>
            <p style={{position:'absolute', marginLeft:'370px', fontSize:"20px", marginTop:"70px"}} >Имя</p>
            <p style={{position:'absolute', marginLeft:'600px', fontSize:"20px", marginTop:"70px"}} >Телефон</p>
            <input type='text' placeholder='Анна' style={{position:"absolute", marginLeft:"350px", marginTop:"120px", width:"228px", height:"40px", border:"0", backgroundColor:"rgb(221, 221, 221)"}}></input>
            <input type='text' placeholder='+7(949)123-32-21' style={{position:"absolute", marginLeft:"590px", marginTop:"120px", width:"228px", height:"40px", border:"0", backgroundColor:"rgb(221, 221, 221)"}}></input>
            <a href='/' style={{position:"absolute", marginLeft:"900px", marginTop:"120px", fontSize:"20px", textDecoration:"none", color:"black"}} >Оставить отзыв</a>
            <img src={kvadratik} alt="/" style={{position:"absolute", marginLeft:"900px", marginTop:"106px", fontSize:"20px", zIndex:"-1"}}/>
            <img src={polosochka} alt="/" style={{position:"absolute", marginLeft:"900px", marginTop:"145px", fontSize:"20px", zIndex:"-1"}}/>
          </Container>
        <Container className="ms-50">
            <img src={FooterBG} alt="/" style={{position:"absolute", marginTop:"210px", marginLeft:"-300px"}} />
            <img src={logo} alt="/" style={{position:"absolute", marginTop:"230px", marginLeft:"850px", width:"400px"}} />
            <img src={tochka} alt="/" style={{position:"absolute", marginTop:"286px", marginLeft:"38px"}} />
            <img src={FooterDot} alt="/" style={{position:"absolute", marginTop:"205px", marginLeft:"-310px", width:"1920px"}}/>
            <a href='/' style={{position:"absolute", textDecoration:"none", color:"black", marginTop:"250px", fontSize:"23px"}}>Главная</a>
            <a href='/' style={{position:"absolute", textDecoration:"none", color:"black", marginTop:"250px", fontSize:"23px", marginLeft:"160px"}}>О нас</a>
            <a href='/' style={{position:"absolute", textDecoration:"none", color:"black", marginTop:"250px", fontSize:"23px", marginLeft:"300px"}}>Услуги</a>
            <a href='/' style={{position:"absolute", textDecoration:"none", color:"black", marginTop:"250px", fontSize:"23px", marginLeft:"450px"}}>Портфолио</a>
            <a href='/' style={{position:"absolute", textDecoration:"none", color:"black", marginTop:"250px", fontSize:"23px", marginLeft:"640px"}}>Контакты</a>
            <a href='/' style={{position:"absolute", textDecoration:"none", color:"black", marginTop:"330px", fontSize:"23px", marginLeft:"10px"}}>Цены</a>
            <a href='/' style={{position:"absolute", textDecoration:"none", color:"black", marginTop:"330px", fontSize:"23px", marginLeft:"120px"}}>Web-дизайн</a>
            <a href='/' style={{position:"absolute", textDecoration:"none", color:"black", marginTop:"330px", fontSize:"23px", marginLeft:"350px"}}>Продвижение</a>
            <a href='/' style={{position:"absolute", textDecoration:"none", color:"black", marginTop:"330px", fontSize:"23px", marginLeft:"570px"}}>Создание сайтов</a>
            <p style={{position:"absolute", textAlign:"right", marginTop:"370px",marginLeft:"880px", fontSize:"18px"}}> Заказывая у нас услугу вы можете быть<br/>
уверены, что получите эффективный<br/>
инструмент для реализации своих идей</p>
            <h1 style={{position:"absolute", textAlign:"left", marginTop:"400px", fontSize:"20px"}} >Телефон:</h1>
            <h1 style={{position:"absolute", textAlign:"left", marginTop:"400px", fontSize:"20px",marginLeft:"350px"}} >Почта:</h1>
            <h1 style={{position:"absolute", textAlign:"left", marginTop:"440px", fontSize:"20px"}}>+7(949)123-32-21</h1>
            <h1 style={{position:"absolute", textAlign:"left", marginTop:"440px", fontSize:"20px",marginLeft:"350px"}}>+7(949)123-32-21</h1>
          </Container>
      </div>
    )
  }
}
