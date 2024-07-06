import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
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
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Container className="ms-50">
            <img src={Oblako7} alt="/" style={{position:"absolute", marginLeft:"800px", marginTop:"-30px"}} />
            <img src={Svechenie4} alt="/" style={{marginLeft:"700px"}} />
            <img src={GreenDot} alt="/" style={{position:"absolute", marginLeft:"800px", marginTop:"-850px", zIndex:"-1" }} />
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
