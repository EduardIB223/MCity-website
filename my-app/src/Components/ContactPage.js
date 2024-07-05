import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import fon1 from './Photo4/Rectangle 10.svg'
import cloud1 from './Photo4/klipartz.com - 2020-12-29T161810 4.svg'
import cloud2 from './Photo4/klipartz.com - 2020-12-29T161810 3.svg'
import Shy from './Photo4/вапшгри 3.svg'
import Kolo from './Photo4/klipartz.com - 2020-12-30T123812 1.svg'
import Cloud3 from './Photo4/klipartz.com - 2020-12-29T161810 2.svg'
import Globus from './Photo4/картинка п р.svg'
import Palka from './Photo4/Rectangle 144.svg'
import Cartochka from './Photo4/карточка.svg'
import send from './Photo4/отправить .svg'
import separatedLine from './Photo4/Vector 91.svg'
import BlackBG from './Photo4/Rectangle 146.svg'
import Star from './Photo4/Star 3.svg'
import FooterBG from './Photo/Rectangle 106.svg'
import logo from './Photo/logo.svg';
import tochka from './Photo/Ellipse 3.svg';
import FooterDot from './Photo/Group 19.svg'
import Oblako7 from './Photo/M сити2.svg'
import Svechenie4 from './Photo/вапшгри 7.svg'
import GreenDot from './Photo2/Mask Group 55.svg'
import Phone from './Photo/Group 137.svg'
import kvadratik from './Photo/Rectangle 12.svg';
import polosochka from './Photo/Rectangle 11.svg';

export default class ContactPage extends Component {
  render() {
    return (
        <>
      <div>
        <Container className='ms-50'>
            <img src={fon1} style={{position:"absolute", marginLeft:"-300px"}}/>
            <img src={cloud1}  style={{position:"absolute", marginLeft:"-300px", marginTop:"270px", zIndex:"1"}}/>
            <img src={cloud2} style={{position:"absolute", marginLeft:"500px", marginTop:"0px", zIndex:"1"}}/>
            <img src={Shy}  style={{position:"absolute", marginLeft:"100px", marginTop:"5px"}} />
            <img src={Kolo} style={{position:"absolute", marginLeft:"420px", marginTop:"165px"}} />
            <img src={Cloud3}style={{position:"absolute", marginLeft:"550px", marginTop:"165px"}} />
            <img src={Globus} style={{position:"absolute", marginLeft:"620px", marginTop:"115px", zIndex:"4"}} />
            <img src={Palka} style={{position:"absolute", marginLeft:"545px", marginTop:"525px", zIndex:"3", width:"1073px"}}/>
            <h1 style={{position:"absolute", fontSize:"80px", fontWeight:"699", marginTop:"90px", marginLeft:"0px"}}>Контакты</h1>
            <p style={{position:"absolute", fontSize:"20px",  marginTop:"190px", marginLeft:"0px"}}>Хватит думать! Давайте работать вместе! Кратко<br/> опишите, что у вас уже есть и чего вы хотите достичь.</p>
            <img src={Cartochka} style={{position:"absolute", marginTop:"390px", zIndex:"4", marginLeft:"-40px"}} />
            <h1 style={{position:"absolute", fontSize:"50px", fontWeight:"699", marginTop:"460px", marginLeft:"55px", zIndex:"10"}}>Оставить заявку</h1>
            <p style={{position:"absolute", fontSize:"25px",  marginTop:"540px", marginLeft:"65px", zIndex:"10"}}>Имя</p>
            <input type="text" placeholder='Анна' style={{position:"absolute",width:"398px",height:"53px", fontSize:"25px",  marginTop:"580px", marginLeft:"55px", zIndex:"10", border:"0", backgroundColor:"rgb(221, 221, 221)"}}></input>
            <p style={{position:"absolute", fontSize:"25px",  marginTop:"650px", marginLeft:"65px", zIndex:"10"}}>Телефон</p>
            <input type="text" placeholder='+7(949)123-32-21' style={{position:"absolute",width:"398px",height:"53px", fontSize:"25px",  marginTop:"700px", marginLeft:"55px", zIndex:"10", border:"0", borderWidth:"3px", backgroundColor:"rgb(221, 221, 221)"}}></input>
            <p style={{position:"absolute", fontSize:"25px",  marginTop:"770px", marginLeft:"65px", zIndex:"10"}}>Email</p>
            <input type="text" placeholder='@' style={{position:"absolute",width:"398px",height:"53px", fontSize:"25px",  marginTop:"820px", marginLeft:"55px", zIndex:"10", border:"0", backgroundColor:"rgb(221, 221, 221)"}}></input>
            <p style={{position:"absolute", fontSize:"25px",  marginTop:"880px", marginLeft:"65px", zIndex:"10"}}>Сообщение (необязательно)</p>
            <input type="text" placeholder='Расскажите о вашем проекте' style={{position:"absolute",width:"398px",height:"228px", fontSize:"25px",  marginTop:"940px", marginLeft:"55px", zIndex:"10", border:"0", backgroundColor:"rgb(221, 221, 221)"}}></input>
            <a href="/"><img src={send} style={{position:"absolute", marginTop:"1200px",marginLeft:"200px" ,zIndex:"11"}} /></a>
            <h1 style={{position:"absolute", marginTop:"750px", marginLeft:"680px", fontSize:"25px"}} >Адрес:</h1>
            <p style={{position:"absolute", marginTop:"780px", marginLeft:"680px", fontSize:"25px", fontWeight:"699"}}>ул. Архитектора Нильсена, <br/>60, офис 111А</p>
            <img src={separatedLine}style={{position:"absolute", marginTop:"880px", marginLeft:"570px"}} />
            <h1 style={{position:"absolute", marginTop:"930px", marginLeft:"680px", fontSize:"25px"}} >E-mail:</h1>
            <p style={{position:"absolute", marginTop:"960px", marginLeft:"680px", fontSize:"25px", fontWeight:"699"}}>digitallabmrpl@gmail.com</p>
            <img src={separatedLine}style={{position:"absolute", marginTop:"1060px", marginLeft:"570px"}} />
            <h1 style={{position:"absolute", marginTop:"1100px", marginLeft:"680px", fontSize:"25px"}} >Телефон:</h1>
            <p style={{position:"absolute", marginTop:"1130px", marginLeft:"680px", fontSize:"25px", fontWeight:"699"}}>(096) 229-64-63</p>
            <img src={BlackBG} style={{position:"relative", marginTop:"1250px", marginLeft:"-300px"}} />
            <h1 style={{position:"absolute", color:"white", fontSize:"70px", marginTop:"-500px", marginLeft:"-50px", fontWeight:"699"}} >С нами вы получите</h1>
            <img src={Star} style={{position:"absolute", marginTop:"-320px", marginLeft:"-50px"}}/>
            <h1 style={{position:"absolute", color:"#95DB3A",fontSize:"27px" ,marginTop:"-330px", marginLeft:"20px"}} >Соответствие <br/>
            задачам и целям</h1>
            <p style={{position:"absolute", color:"white",fontSize:"18px" ,marginTop:"-255px", marginLeft:"20px"}}>Уникальный дизайн,<br/> юзабилити, функционал<br/> сайт будет таким,<br/> каким вы его<br/> представляете.</p>
            <img src={Star} style={{position:"absolute", marginTop:"-320px", marginLeft:"510px"}}/>
            <h1 style={{position:"absolute", color:"#95DB3A",fontSize:"27px" ,marginTop:"-330px", marginLeft:"580px"}} >Готовность <br/>
            к продвижению</h1>
            <p style={{position:"absolute", color:"white",fontSize:"18px" ,marginTop:"-255px", marginLeft:"580px"}}>Еще на начальных этапах <br/> работы мы проектируем<br/>сайты с учетом <br/>необходимости продвижения</p>
            <img src={Star} style={{position:"absolute", marginTop:"-320px", marginLeft:"1070px"}}/>
            <h1 style={{position:"absolute", color:"#95DB3A",fontSize:"27px" ,marginTop:"-330px", marginLeft:"1140px"}} >Простоту  <br/>
            управления</h1>
            <p style={{position:"absolute", color:"white",fontSize:"18px" ,marginTop:"-255px", marginLeft:"1140px"}}>Мы используем  <br/> современные CMS, это <br/>позволяет сделать  <br/>простую админ панель</p>
        </Container>
        <Container className="ms-50">
            <img src={Oblako7} alt="/" style={{position:"absolute", marginLeft:"800px", marginTop:"-70px", zIndex:"2"}} />
            <img src={Svechenie4} alt="/" style={{marginLeft:"700px", zIndex:"-4", marginTop:"-70px"}} />
            <img src={GreenDot} alt="/" style={{position:"absolute", marginLeft:"700px", marginTop:"-520px", zIndex:"-2" }} />
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
      </>
    )
  }
}
