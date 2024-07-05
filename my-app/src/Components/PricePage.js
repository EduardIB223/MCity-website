import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import fon1 from './Photo3/Rectangle 10.svg'
import road from './Photo3/48108320-vector-illustration-of-outline-of-perspective-of-curved-road 1.svg'
import tree from './Photo3/klipartz.com - 2020-12-29T203255.svg'
import men from './Photo3/мужчина картинка.svg'
import ShyMen from './Photo3/вапшгри 3.svg'
import cloud from './Photo3/klipartz.com - 2020-12-29T161810 2.svg'
import grass from './Photo3/klipartz 10.svg'
import BlackPolosochka from './Photo3/Rectangle 108.svg'
import BlackSMTH from './Photo3/Vector 77.svg'
import cloud1 from './Photo3/цитата.svg'
import GreenDots from './Photo3/Mask Group 55.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Col1 from './Photo3/Group 143.svg'
import AnotheCol from './Photo3/Union.svg'
import buy from './Photo3/заказать.svg'
import BlackBG from './Photo3/Subtract.svg'
import BlackDots from './Photo3/klipartz.com - 2020-12-31T140129 2.svg'
import Svechenie1 from './Photo3/вапшгри 4.svg'
import Stolb from './Photo3/картинка столб.svg'
import Cloud2 from './Photo3/цитата м сити.svg'
import ugol from './Photo3/Vector 83.svg'
import arrow from './Photo3/Vector.svg'
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


export default class PricePage extends Component {
  render() {
    return (
      <div>
        <Container className="ms-50" >
         
          <img src={road} style={{position:"absolute", marginTop:"365px", marginLeft:"-100px"}}/>
          <img src={tree} style={{position:"absolute", marginTop:"230px", marginLeft:"-160px"}}/>
          <img src={men} style={{position:"absolute", marginTop:"135px", marginLeft:"90px"}}/>
          <img src={ShyMen} style={{position:"absolute", marginTop:"35px", marginLeft:"-300px", zIndex:"-2"}} />
          <img src={cloud} style={{position:"absolute", marginLeft:"-340px", zIndex:"-1"}} />
          <img src={grass} style={{position:"absolute", marginTop:"401px", marginLeft:"825px"}}/>
          <img src={BlackPolosochka} style={{position:"absolute", marginLeft:"-300px", marginTop:"650px"}}/>
          <img src={BlackSMTH} style={{position:"absolute", marginLeft:"300px", marginTop:"650px"}}/>
          <img src={cloud1}  style={{position:"absolute", marginLeft:"420px", marginTop:"550px"}}/>
          <h1 style={{position:"absolute", fontSize:"70px", fontWeight:"699", marginLeft:"550px", marginTop:"200px"}}>Цены на услуги</h1>
          <p style={{position:"absolute", fontSize:"20px", marginLeft:"550px", marginTop:"300px"}}>Давайте раскроем возможности вашего бизнеса вместе!</p>
          <img src={GreenDots} style={{position:"absolute",marginLeft:"-300px", marginTop:"650px", zIndex:"-5"}}/>
          <h1 style={{position:"absolute", fontSize:"80px", fontWeight:"699", marginLeft:"00px", marginTop:"900px"}}>Мы гарантируем <br/> результат</h1>
          <p style={{position:"absolute", fontSize:"20px", marginLeft:"700px", marginTop:"930px"}}>Оценивая ваш бизнес, мы максимально точно подбираем<br/> инструменты онлайн маркетинга, фокусируем внимание <br/>
          на цифрах и показателях, увеличивая кол-во обращений и<br/> вовлеченности целевой аудитории, используя при этом <br/>минимальные бюджеты.</p>
          <img src={fon1} style={{position:"relative", marginLeft:"-300px", zIndex:"-4"}} />
        </Container>
        <Container className="ms-50" >
          <Row style={{marginTop:"600px"}} >
            <Col>
              <img src={Col1} />
              <h1 style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>от 9.950 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>Разработка сайтов</h1>
              <p style={{position:"absolute", marginTop:"-340px", marginLeft:"30px", fontSize:"20px"}}>Стоимость разработки сайта<br/> зависит от поставленной<br/> задачи проекта</p>
              <a href="/" style={{position:"absolute", marginTop:"350px", marginLeft:"-350px"}}><img src={buy} /> </a>
            </Col>
            <Col>
              <img src={AnotheCol} />
              <h1 style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>от 25.505 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>Разработка<br/>интернет-магазина</h1>
              <p style={{position:"absolute", marginTop:"-340px", marginLeft:"30px", fontSize:"18px"}}>Мы разрабатываем только <br/>индивидуальные интернет<br/> магазины. без использования<br/> готовых шаблонов и готовых CMS<br/> типа Presta Shop, Shopyfi и других</p>
              <a href="/" style={{position:"absolute", marginTop:"350px", marginLeft:"-350px"}}><img src={buy} /> </a>
            </Col>
            <Col>
              <img src={AnotheCol} />
              <h1 style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>от 6.500 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>landing page</h1>
              <p style={{position:"absolute", marginTop:"-350px", marginLeft:"30px", fontSize:"18px"}}>Есть готовые решения, в которые<br/> осталось добавить только ваши<br/> фирменные цвета и наполнить<br/> содержимым. Либо же создадим <br/>уникальный дизайн только для вас</p>
              <a href="/" style={{position:"absolute", marginTop:"350px", marginLeft:"-350px"}}><img src={buy} /> </a>
            </Col>
          </Row>
          <Row style={{marginTop:"50px"}}>
          <Col>
              <img src={AnotheCol} />
              <h1 style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>от 11.850 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>Комплексный <br/>онлайн- маркетинг</h1>
              <p style={{position:"absolute", marginTop:"-340px", marginLeft:"30px", fontSize:"20px"}}>Разработка, анализ, реализация<br/> комплексной стратегии<br/> продвижения. Наша цель  — это<br/> системный рост продаж</p>
              <a href="/" style={{position:"absolute", marginTop:"350px", marginLeft:"-350px"}}><img src={buy} /> </a>
            </Col>
            <Col>
              <img src={AnotheCol} />
              <h1 style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>от 9.150 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>Настройка и ведение<br/>Google рекламы</h1>
              <p style={{position:"absolute", marginTop:"-345px", marginLeft:"30px", fontSize:"20px"}}>Приоритетная реклама в <br/>поисковой выдачи, баннерная<br/> реклама, ремаркетинг, реклама<br/>в YouTube </p>
              <a href="/" style={{position:"absolute", marginTop:"350px", marginLeft:"-350px"}}><img src={buy} /> </a>
            </Col>
            <Col>
              <img src={AnotheCol} />
              <h1 style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>от 7.950 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}>Продвижение<br/>в социальных сетях </h1>
              <p style={{position:"absolute", marginTop:"-345px", marginLeft:"30px", fontSize:"20px"}}>Настройка и ведение<br/> таргетированной рекламы,<br/> лидогенерация, комплексное <br/>развитие аккаунта,постинг<br/> актуального контента</p>
              <a href="/" style={{position:"absolute", marginTop:"350px", marginLeft:"-350px"}}><img src={buy} /> </a>
            </Col>
          </Row>
        </Container>
        <Container>
          <img src={ugol} style={{position:"absolute", marginTop:"800px", zIndex:"5"}}/>
          <img src={arrow} style={{position:"absolute", marginTop:"830px",marginLeft:"30px", zIndex:"5"}}/>
          <h1 style={{position:"absolute", color:"#95DB3A",marginTop:"880px",marginLeft:"30px", zIndex:"5", fontSize:"25px"}}>Web - Дизайн</h1>
          <h1 style={{position:"absolute", color:"#95DB3A",marginTop:"880px",marginLeft:"530px", zIndex:"5", fontSize:"25px"}}>Создание сайтов</h1>
          <h1 style={{position:"absolute", color:"#95DB3A",marginTop:"880px",marginLeft:"1030px", zIndex:"5", fontSize:"25px"}}>Продвижение</h1>
          <p style={{position:"absolute", color:"white",marginTop:"920px",marginLeft:"30px", zIndex:"5", fontSize:"18px"}}>Восприятие информации, стилизация,<br/> идентификация и многое другое<br/> решает дизайн. Дизайн это то, что<br/> работает. Дизайн и креатив, совмещая <br/>которые можно уменьшить вложения в<br/> рекламу в несколько раз.</p>
          <p style={{position:"absolute", color:"white",marginTop:"920px",marginLeft:"530px", zIndex:"5", fontSize:"18px"}}>Сайт - это один из инструментов<br/> продаж онлайн, большинство<br/> современных технологий диджитал,<br/> напрямую зависит от качества и<br/> функциональности ресурса, которые<br/> мы можем обеспечить.</p>
          <p style={{position:"absolute", color:"white",marginTop:"920px",marginLeft:"1030px", zIndex:"5", fontSize:"18px"}}>Комплексное продвижение включает<br/> работы по разным направлениям:<br/> SEO, SMM, контент-, email-,<br/> видеомаркетинг и т. д. Это самый<br/> эффективный способ продвижения в<br/> интернете.</p>
        <h1 style={{position:"absolute", color:"white", fontSize:"70px", fontWeight:"699", marginTop:"650px", zIndex:"5"}} >Направления</h1>
          <img src={Cloud2}style={{position:"absolute",  marginLeft:"175px", marginTop:"320px", zIndex:"3"}} />
          <img src={Svechenie1} style={{position:"absolute",  marginLeft:"75px", zIndex:"-3"}}/>
          <img src={BlackDots} style={{position:"absolute", marginTop:"400px", marginLeft:"350px",zIndex:"-1"}} />
          <img src={Stolb}  style={{position:"absolute",marginLeft:"725px", marginTop:"300px", zIndex:"0"}}/>
          <img src={BlackBG} style={{position:"relative", marginTop:"500px", marginLeft:"-300px"}} />
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
    )
  }
}
