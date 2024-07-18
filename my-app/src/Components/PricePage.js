import React, { Component } from 'react'
import { Container, Carousel, CarouselItem, CarouselCaption, NavLink } from 'react-bootstrap'
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
import ugol from './Photo3/Group 148.svg'
import './Animation/ForCardInPricePage.css'
import shadow from './Animation/UnionForPerehod.svg'
import kvadratik from './Photo/Rectangle 12.svg';
import polosochka from './Photo/Rectangle 11.svg';
import { Link } from 'react-router-dom'


export default class PricePage extends Component {
  state = {
    hovered: false,
  };
  handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  setHovered = (value) => {
    this.setState({ hovered: value });
  };

  render() {
    const { hovered } = this.state;
    return (
      <div>
        <Container className="ms-50" >
          <img src={road} alt="/" style={{position:"absolute", marginTop:"365px", marginLeft:"-100px"}}/>
          <img src={tree} alt="/"style={{position:"absolute", marginTop:"230px", marginLeft:"-160px"}}/>
          <img src={men}alt="/" style={{position:"absolute", marginTop:"135px", marginLeft:"90px"}}/>
          <img src={ShyMen}alt="/" style={{position:"absolute", marginTop:"35px", marginLeft:"-300px", zIndex:"-2"}} />
          <img src={cloud}alt="/" style={{position:"absolute", marginLeft:"-340px", zIndex:"-1"}} />
          <img src={grass}alt="/" style={{position:"absolute", marginTop:"401px", marginLeft:"825px"}}/>
          <img src={BlackPolosochka}alt="/" style={{position:"absolute", marginLeft:"-300px", marginTop:"650px"}}/>
          <img src={BlackSMTH}alt="/" style={{position:"absolute", marginLeft:"300px", marginTop:"650px"}}/>
          <img src={cloud1} alt="/" style={{position:"absolute", marginLeft:"420px", marginTop:"550px"}}/>
          <h1 style={{position:"absolute", fontSize:"70px", fontWeight:"699", marginLeft:"550px", marginTop:"200px"}}>Цены на услуги</h1>
          <p style={{position:"absolute", fontSize:"20px", marginLeft:"550px", marginTop:"300px"}}>Давайте раскроем возможности вашего бизнеса вместе!</p>
          <img src={GreenDots}alt="/" style={{position:"absolute",marginLeft:"-300px", marginTop:"650px", zIndex:"-5"}}/>
          <h1 style={{position:"absolute", fontSize:"80px", fontWeight:"699", marginLeft:"00px", marginTop:"900px"}}>Мы гарантируем <br/> результат</h1>
          <p style={{position:"absolute", fontSize:"20px", marginLeft:"700px", marginTop:"930px"}}>Оценивая ваш бизнес, мы максимально точно подбираем<br/> инструменты онлайн маркетинга, фокусируем внимание <br/>
          на цифрах и показателях, увеличивая кол-во обращений и<br/> вовлеченности целевой аудитории, используя при этом <br/>минимальные бюджеты.</p>
          <img src={fon1}alt="/" style={{position:"relative", marginLeft:"-300px", zIndex:"-4"}} />
        </Container>
        <Container className="ms-50" >
          <Row style={{marginTop:"600px"}} >
            <Col >
            <img src={shadow} style={{position:"absolute",zIndex:"-1"}}  />
            <Container style={{position:"relative", marginLeft:"-12px"}} className='CardContainer'>
              <img src={AnotheCol} alt="/" className='Card'/>
              <h1 style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}} className='CardText'>от 9.950 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}} className='CardText'>Разработка сайтов</h1>
              <p style={{position:"absolute", marginTop:"-340px", marginLeft:"30px", fontSize:"20px"}} className='CardText'>Стоимость разработки сайта<br/> зависит от поставленной<br/> задачи проекта</p>
              <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "-157px" : "-154px",
    marginLeft: hovered ? "43px" : "30px", // Смещение вправо при наведении
    zIndex: "5"
  }}
  className={`kvadratik ${hovered ? 'hovered' : ''}`}
>
  <img src={kvadratik} alt="Kvadratik" />
</NavLink>
<NavLink
  to="/about" // Измените здесь на /about
  style={{
    position: "absolute",
    fontSize: "20px",
    marginLeft: "8px", // Зафиксировано
    marginTop: "-140px",
    zIndex: "5"
  }}
  className={`ForPolosochka ${hovered ? 'hovered' : ''}`}
>
  <img src={polosochka} alt="Polosочoka" />
</NavLink>
<NavLink
  to="/AboutUs" // Здесь тоже измените на /about
  style={{
    position: 'absolute',
    fontWeight: "700",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "365px",
    marginLeft: "-330px",
    zIndex: "11",
    fontSize: '1.3em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
            </Container>
            </Col>
            <Col>
            <img src={shadow} style={{position:"absolute",zIndex:"-1"}}  />
            <Container style={{position:"relative", marginLeft:"-12px"}} className='CardContainer'>
              <img src={AnotheCol}  className='Card' alt="/"/>
              <h1 style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}} className='CardText'>от 25.505 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}} className='CardText'>Разработка<br/>интернет-магазина</h1>
              <p style={{position:"absolute", marginTop:"-340px", marginLeft:"30px", fontSize:"18px"}} className='CardText'>Мы разрабатываем только <br/>индивидуальные интернет<br/> магазины. без использования<br/> готовых шаблонов и готовых CMS<br/> типа Presta Shop, Shopyfi и других</p>
              <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "-157px" : "-154px",
    marginLeft: hovered ? "43px" : "30px", // Смещение вправо при наведении
    zIndex: "5"
  }}
  className={`kvadratik ${hovered ? 'hovered' : ''}`}
>
  <img src={kvadratik} alt="Kvadratik"  />
</NavLink>
<NavLink
  to="/about" // Измените здесь на /about
  style={{
    position: "absolute",
    fontSize: "20px",
    marginLeft: "8px", // Зафиксировано
    marginTop: "-140px",
    zIndex: "5"
  }}
  className={`ForPolosochka ${hovered ? 'hovered' : ''}`}
>
  <img src={polosochka} alt="Polosочoka" />
</NavLink>
<NavLink
  to="/AboutUs" // Здесь тоже измените на /about
  style={{
    position: 'absolute',
    fontWeight: "700",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "365px",
    marginLeft: "-330px",
    zIndex: "11",
    fontSize: '1.3em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
              </Container>
            </Col>
            <Col>
            <img src={shadow} style={{position:"absolute",zIndex:"-1"}}  />
            <Container style={{position:"relative", marginLeft:"-12px"}} className='CardContainer'>
              <img src={AnotheCol}alt="/"  className='Card'/>
              <h1 style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}} className='CardText'>от 6.500 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}} className='CardText'>landing page</h1>
              <p style={{position:"absolute", marginTop:"-350px", marginLeft:"30px", fontSize:"18px"}}>Есть готовые решения, в которые<br/> осталось добавить только ваши<br/> фирменные цвета и наполнить<br/> содержимым. Либо же создадим <br/>уникальный дизайн только для вас</p>
              <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "-157px" : "-154px",
    marginLeft: hovered ? "43px" : "30px", // Смещение вправо при наведении
    zIndex: "5"
  }}
  className={`kvadratik ${hovered ? 'hovered' : ''}`}
>
  <img src={kvadratik} alt="Kvadratik" />
</NavLink>
<NavLink
  to="/about" // Измените здесь на /about
  style={{
    position: "absolute",
    fontSize: "20px",
    marginLeft: "8px", // Зафиксировано
    marginTop: "-140px",
    zIndex: "5"
  }}
  className={`ForPolosochka ${hovered ? 'hovered' : ''}`}
>
  <img src={polosochka} alt="Polosочoka" />
</NavLink>
<NavLink
  to="/AboutUs" // Здесь тоже измените на /about
  style={{
    position: 'absolute',
    fontWeight: "700",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "365px",
    marginLeft: "-330px",
    zIndex: "11",
    fontSize: '1.3em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
              </Container>
            </Col>
          </Row>
          <Row style={{marginTop:"50px"}}>
          <Col>
          <img src={shadow} style={{position:"absolute",zIndex:"-1"}}  />
          <Container style={{position:"relative", marginLeft:"-12px"}} className='CardContainer'>
              <img src={AnotheCol} className='Card' alt="/"/>
              <h1 className='Card' style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}} className='CardText'>от 11.850 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}} className='CardText'>Комплексный <br/>онлайн- маркетинг</h1>
              <p style={{position:"absolute", marginTop:"-340px", marginLeft:"30px", fontSize:"20px"}} className='CardText'>Разработка, анализ, реализация<br/> комплексной стратегии<br/> продвижения. Наша цель  — это<br/> системный рост продаж</p>
              <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "-157px" : "-154px",
    marginLeft: hovered ? "43px" : "30px", // Смещение вправо при наведении
    zIndex: "5"
  }}
  className={`kvadratik ${hovered ? 'hovered' : ''}`}
>
  <img src={kvadratik} alt="Kvadratik" />
</NavLink>
<NavLink
  to="/about" // Измените здесь на /about
  style={{
    position: "absolute",
    fontSize: "20px",
    marginLeft: "8px", // Зафиксировано
    marginTop: "-140px",
    zIndex: "5"
  }}
  className={`ForPolosochka ${hovered ? 'hovered' : ''}`}
>
  <img src={polosochka} alt="Polosочoka" />
</NavLink>
<NavLink
  to="/AboutUs" // Здесь тоже измените на /about
  style={{
    position: 'absolute',
    fontWeight: "700",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "365px",
    marginLeft: "-330px",
    zIndex: "11",
    fontSize: '1.3em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
              </Container>
            </Col>
            <Col>
            <img src={shadow} style={{position:"absolute",zIndex:"-1"}}  />
            <Container style={{position:"relative", marginLeft:"-12px"}} className='CardContainer'>
              <img src={AnotheCol} className='Card' alt="/"/>
              <h1 style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}} className='CardText'>от 9.150 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}} className='CardText'>Настройка и ведение<br/>Google рекламы</h1>
              <p style={{position:"absolute", marginTop:"-345px", marginLeft:"30px", fontSize:"20px"}} className='CardText'>Приоритетная реклама в <br/>поисковой выдачи, баннерная<br/> реклама, ремаркетинг, реклама<br/>в YouTube </p>
              <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "-157px" : "-154px",
    marginLeft: hovered ? "43px" : "30px", // Смещение вправо при наведении
    zIndex: "5"
  }}
  className={`kvadratik ${hovered ? 'hovered' : ''}`}
>
  <img src={kvadratik} alt="Kvadratik" />
</NavLink>
<NavLink
  to="/about" // Измените здесь на /about
  style={{
    position: "absolute",
    fontSize: "20px",
    marginLeft: "8px", // Зафиксировано
    marginTop: "-140px",
    zIndex: "5"
  }}
  className={`ForPolosochka ${hovered ? 'hovered' : ''}`}
>
  <img src={polosochka} alt="Polosочoka" />
</NavLink>
<NavLink
  to="/AboutUs" // Здесь тоже измените на /about
  style={{
    position: 'absolute',
    fontWeight: "700",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "365px",
    marginLeft: "-330px",
    zIndex: "11",
    fontSize: '1.3em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
      </Container>
            </Col>
            <Col >
            <img src={shadow} style={{position:"absolute",zIndex:"-1"}}  />
            <Container style={{position:"relative", marginLeft:"-12px"}} className='CardContainer'>
              <img src={AnotheCol}  className='Card' alt="/"/>
              <h1  className='Card' style={{position:"absolute", marginTop:"-460px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}  className='CardText'>от 7.950 грн</h1>
              <h1 style={{position:"absolute", marginTop:"-420px", marginLeft:"30px", fontSize:"30px", fontWeight:"699"}}  className='CardText'>Продвижение<br/>в социальных сетях </h1>
              <p style={{position:"absolute", marginTop:"-345px", marginLeft:"30px", fontSize:"20px"}}  className='CardText'>Настройка и ведение<br/> таргетированной рекламы,<br/> лидогенерация, комплексное <br/>развитие аккаунта,постинг<br/> актуального контента</p>
      <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "-157px" : "-154px",
    marginLeft: hovered ? "43px" : "30px", // Смещение вправо при наведении
    zIndex: "5"
  }}
  className={`kvadratik ${hovered ? 'hovered' : ''}`}
>
  <img src={kvadratik} alt="Kvadratik" />
</NavLink>
<NavLink
  to="/about" // Измените здесь на /about
  style={{
    position: "absolute",
    fontSize: "20px",
    marginLeft: "8px", // Зафиксировано
    marginTop: "-140px",
    zIndex: "5"
  }}
  className={`ForPolosochka ${hovered ? 'hovered' : ''}`}
>
  <img src={polosochka} alt="Polosочoka" />
</NavLink>
<NavLink
  to="/AboutUs" // Здесь тоже измените на /about
  style={{
    position: 'absolute',
    fontWeight: "700",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "365px",
    marginLeft: "-330px",
    zIndex: "11",
    fontSize: '1.3em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
   </Container>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col >
            <Container className='CardContainer2'>
              <NavLink as={Link} to="/WebDesigne"  onClick={this.handleLinkClick} >
              <img src={ugol} className='Card2' alt="/"style={{position:"absolute", marginTop:"800px", zIndex:"1"}}/>   
              </NavLink>
            <h1 className='CardText2' style={{position:"absolute", color:"#95DB3A",marginTop:"880px",marginLeft:"30px", zIndex:"5", fontSize:"25px"}}>Web - Дизайн</h1>
            <p className='CardText2' style={{position:"absolute", color:"white",marginTop:"920px",marginLeft:"30px", zIndex:"5", fontSize:"18px"}}>Восприятие информации, стилизация,<br/> идентификация и многое другое<br/> решает дизайн. Дизайн это то, что<br/> работает. Дизайн и креатив, совмещая <br/>которые можно уменьшить вложения в<br/> рекламу в несколько раз.</p>
            </Container>
            </Col>
            <Col style={{marginLeft:"20px"}} >
            <Container className='CardContainer2'>
            <NavLink as={Link} to="/StartProject"  onClick={this.handleLinkClick} >
              <img src={ugol} className='Card2' alt="/"style={{position:"absolute", marginTop:"800px", zIndex:"1"}}/>   
              </NavLink>
            <h1 className='CardText2' style={{position:"absolute", color:"#95DB3A",marginTop:"880px",marginLeft:"30px", zIndex:"5", fontSize:"25px"}}>Создание сайтов</h1>
            <p className='CardText2' style={{position:"absolute", color:"white",marginTop:"920px",marginLeft:"30px", zIndex:"5", fontSize:"18px"}}>Сайт - это один из инструментов<br/> продаж онлайн, большинство<br/> современных технологий диджитал,<br/> напрямую зависит от качества и<br/> функциональности ресурса, которые<br/> мы можем обеспечить.</p>
            </Container>
            </Col>
            <Col style={{marginLeft:"20px"}}>  
            <Container className='CardContainer2'>
            <NavLink as={Link} to="/Promotion"  onClick={this.handleLinkClick} >
              <img src={ugol} className='Card2' alt="/"style={{position:"absolute", marginTop:"800px", zIndex:"1"}}/>   
              </NavLink>
          <h1 className='CardText2' style={{position:"absolute", color:"#95DB3A",marginTop:"880px",marginLeft:"30px", zIndex:"5", fontSize:"25px"}}>Продвижение</h1>
          <p className='CardText2' style={{position:"absolute", color:"white",marginTop:"920px",marginLeft:"30px", zIndex:"5", fontSize:"18px"}}>Комплексное продвижение включает<br/> работы по разным направлениям:<br/> SEO, SMM, контент-, email-,<br/> видеомаркетинг и т. д. Это самый<br/> эффективный способ продвижения в<br/> интернете.</p>
          </Container>
          </Col>
          </Row>
        <h1 style={{position:"absolute", color:"white", fontSize:"70px", fontWeight:"699", marginTop:"650px", zIndex:"5"}} >Направления</h1>
          <img src={Cloud2}alt="/"style={{position:"absolute",  marginLeft:"175px", marginTop:"320px", zIndex:"3"}} />
          <img src={Svechenie1}alt="/" style={{position:"absolute",  marginLeft:"75px", zIndex:"-3"}}/>
          <img src={BlackDots} alt="/"style={{position:"absolute", marginTop:"400px", marginLeft:"350px",zIndex:"-1"}} />
          <img src={Stolb} alt="/" style={{position:"absolute",marginLeft:"725px", marginTop:"300px", zIndex:"0"}}/>
          <img src={BlackBG}alt="/" style={{position:"relative", marginTop:"500px", marginLeft:"-300px"}} />
        </Container>
      </div>
    )
  }
}