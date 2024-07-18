import React, { Component } from 'react'
import { Container, Carousel, CarouselItem, CarouselCaption, NavLink, Row, Col } from 'react-bootstrap'
import Shapka from './Photo6/КАРТИНКА ГЛАВНАЯ.svg'
import Card1 from './Photo6/карточка.svg'
import Samuray from './Photo6/самурай картинка.svg'
import Dot from './Photo6/Ellipse 171.svg'
import Cloud from './Photo6/цитата м сити.svg'
import fon2 from './Photo6/фон.svg'
import Hram from './Photo6/1 храм картинка.svg'
import Hram1 from './Photo6/2 храм картинка.svg'
import Hram2 from './Photo6/3 храм картинка.svg'
import Hram3 from './Photo6/4 храм картинка.svg'
import Order from './Photo6/заказать.svg'
import Fon3 from './Photo6/Group 143.svg'
import InYan from './Photo6/Group.svg'
import kvadratik from './Photo/Rectangle 12.svg';
import polosochka from './Photo/Rectangle 11.svg';

export default class StartProject extends Component {
    state = {
        hovered: false,
      };
    
      setHovered = (value) => {
        this.setState({ hovered: value });
      };
    
      render() {
        const { hovered } = this.state;
        return (
      <div>
        <Container className="ms-50" >
            <h1 style={{position:"absolute", marginLeft:"780px", fontSize:"80px", fontWeight:"699", zIndex:"1", marginTop:"70px"}}>Разработка</h1>
            <img src={Shapka} style={{position:"relative", marginLeft:"-300px", marginTop:"-150px"}}/>
        </Container>
        <Container className="ms-50">
            <h1 style={{position:"absolute",  fontSize:"70px", fontWeight:"699", zIndex:"1", marginTop:"-300px", marginLeft:"100px"}}>С нами не <br/> бывает проблем</h1>
            <p style={{position:"absolute", marginTop:"-100px", marginLeft:"100px", fontSize:"18px"}}>После запуска проекта мы готовы взять сайт под полное <br/>обслуживание, поддерживая и повышая эффективность вашего<br/> интернет-бизнеса.</p>
            <Row>
                <Col style={{marginLeft:"75px"}}>
                    <img src={Card1} />
                    <p style={{marginTop:"-140px", marginLeft:"30px", fontSize:"18px"}}>Вместе с эксклюзивным<br/> функциональным внешним видом,<br/> ориентированным на продажи, вы<br/> получите чистый, красивый код</p>
                </Col>
                <Col>
                    <img src={Card1} />
                    <p style={{marginTop:"-140px", marginLeft:"30px", fontSize:"18px"}}>Повысим процент конверсий в <br/>
                    лиды. Увеличим продажи<br/> сопуствующих товаров в онлайн<br/> магазинов.</p>
                </Col>
                <Col>
                    <img src={Card1} />
                    <p style={{marginTop:"-140px", marginLeft:"30px", fontSize:"18px"}}>Клиенты получат доступ к полной<br/> информации о компании:<br/> контакты, услуги, документация,<br/> калькуляторы, прайсы и прочее</p>
                </Col>
            </Row>
        </Container>
        <Container className="ms-50">
            <img src={Samuray} style={{position:"absolute", marginLeft:"-300px", marginTop:"70px"}} />
            <h1 style={{position:"absolute", marginLeft:"700px", marginTop:"65px", fontSize:"72px", fontWeight:"699"}}>Почему наши<br/> сайты продают</h1>
            <p style={{position:"absolute", marginLeft:"700px", marginTop:"265px", fontSize:"18px"}}>Мы не просто занимаемся созданием веб шедевров, мы<br/> берем ответственность за ваши заказы. Веб ресурс сам по<br/> себе не будет продавать, в него нужно вложить кусочек<br/> души. Пока конкуренты просто создают красивые картинки,<br/> мы создаем рабочие шедевры.</p>
            <h1 style={{position:"absolute", marginLeft:"700px", marginTop:"445px", fontSize:"23px", fontWeight:"699"}}>Что мы для этого сделаем?</h1>
            <img src={Dot} style={{position:"absolute", marginLeft:"700px", marginTop:"500px"}}/>
            <p style={{position:"absolute", marginLeft:"750px", marginTop:"490px", fontSize:"18px"}}>Исследование бренда и анализ </p>
            <img src={Dot} style={{position:"absolute", marginLeft:"700px", marginTop:"540px"}}/>
            <p style={{position:"absolute", marginLeft:"750px", marginTop:"530px", fontSize:"18px"}}>Конкурентов </p>
            <img src={Dot} style={{position:"absolute", marginLeft:"700px", marginTop:"580px"}}/>
            <p style={{position:"absolute", marginLeft:"750px", marginTop:"570px", fontSize:"18px"}}>Разработка блок-схемы и структуры сайта </p>
            <img src={Dot} style={{position:"absolute", marginLeft:"700px", marginTop:"620px"}}/>
            <p style={{position:"absolute", marginLeft:"750px", marginTop:"610px", fontSize:"18px"}}>Индивидуальный дизайн сайта</p>
            <img src={Dot} style={{position:"absolute", marginLeft:"700px", marginTop:"660px"}}/>
            <p style={{position:"absolute", marginLeft:"750px", marginTop:"650px", fontSize:"18px"}}>Верстка под различные устройства</p>
            <img src={Dot} style={{position:"absolute", marginLeft:"700px", marginTop:"700px"}}/>
            <p style={{position:"absolute", marginLeft:"750px", marginTop:"690px", fontSize:"18px"}}>Тестирование и настройка</p>
            <img src={Dot} style={{position:"absolute", marginLeft:"700px", marginTop:"740px"}}/>
            <p style={{position:"absolute", marginLeft:"750px", marginTop:"730px", fontSize:"18px"}}>Первичное наполнение</p>
            <img src={Dot} style={{position:"absolute", marginLeft:"700px", marginTop:"780px"}}/>
            <p style={{position:"absolute", marginLeft:"750px", marginTop:"770px", fontSize:"18px"}}>Установка на хостинг</p>
            <img src={Dot} style={{position:"absolute", marginLeft:"700px", marginTop:"820px"}}/>
            <p style={{position:"absolute", marginLeft:"750px", marginTop:"810px", fontSize:"18px"}}>Гарантийная поддержка</p>
            <img src={Cloud} style={{position:"relative", marginLeft:"250px", marginTop:"700px", zIndex:"1"}}/>
        </Container>
        <Container className="ms-50">
            <img src={fon2} style={{position:"absolute", marginLeft:"-300px", marginTop:"-170px"}} />
            <h1 style={{position:"absolute", fontSize:"72px", fontWeight:"699", marginLeft:"650px", marginTop:"-40px"}} >Основные типы<br/> сайтов которые<br/> мы создаем</h1>
            <Row style={{position:"absolute", marginTop:"280px"}}>
                <Col>
                <img src={Hram} />
                <h1 style={{position:"absolute", fontSize:"32px", fontWeight:"699", marginTop:"-100px", marginLeft:"270px"}}>Храм:<br/>
                Landing Page</h1>
                <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "252px" : "257px",
    marginLeft: hovered ? "83px" : "63px", // Смещение вправо при наведении
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
    marginLeft: "47px", // Зафиксировано
    marginTop: "269px",
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
    fontWeight: "600",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "460px",
    marginLeft: "-535px",
    zIndex: "11",
    fontSize: '1.2em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>

                <p style={{position:"absolute", width:"550px", marginTop:"50px", marginLeft:"50px", fontSize:"20px"}}>Это продающая страница об одном продукте, услуге или  мероприятии. Создается под рекламу или PR-активность.
Сайт «цепляет» посетителя с первых секунд и ведет к целевому действию (покупке, регистрации, заявке) — через преимущества, подробные описания и видеоролики к форме заказа и контактам.
</p>    
                </Col>
                <Col>
                <img src={Hram1} />
                <h1 style={{position:"absolute", fontSize:"32px", fontWeight:"699", marginTop:"-100px", marginLeft:"270px"}}>Храм:<br/>
                Сайт-каталог</h1>
                <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "263px" : "268px",
    marginLeft: hovered ? "83px" : "63px", // Смещение вправо при наведении
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
    marginLeft: "47px", // Зафиксировано
    marginTop: "280px",
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
    fontWeight: "600",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "460px",
    marginLeft: "-535px",
    zIndex: "11",
    fontSize: '1.2em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
                <p style={{position:"absolute", width:"519px", marginTop:"50px", marginLeft:"50px", fontSize:"20px"}}>Такой сайт помогает представить все товары и услуги с подробным описанием, характеристиками, схемами, преимуществами и формой заказа.
                Чтобы пользователь мог легко выбрать нужный товар, сделаем фильтры, добавим блоки с сопутствующими товарами, выведем окно поиска.
</p>    
                </Col>
            </Row>
            <Row style={{position:"absolute", marginTop:"850px"}}>
                <Col>
                <img src={Hram2} />
                <h1 style={{position:"absolute", fontSize:"32px", fontWeight:"699", marginTop:"-100px", marginLeft:"270px"}}>Храм:<br/>
                Интернет-магазин</h1>
                <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "257px" : "260px",
    marginLeft: hovered ? "81px" : "55px", // Смещение вправо при наведении
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
    marginLeft: "45px", // Зафиксировано
    marginTop: "274px",
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
    fontWeight: "600",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "460px",
    marginLeft: "-530px",
    zIndex: "11",
    fontSize: '1.2em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
                <p style={{position:"absolute", width:"550px", marginTop:"50px", marginLeft:"50px", fontSize:"20px"}}>Это продающая страница об одном продукте, услуге или  мероприятии. Создается под рекламу или PR-активность.
Сайт «цепляет» посетителя с первых секунд и ведет к целевому действию (покупке, регистрации, заявке) — через преимущества, подробные описания и видеоролики к форме заказа и контактам.
</p>    
                </Col>
                <Col>
                <img src={Hram3} />
                <h1 style={{position:"absolute", fontSize:"30px", fontWeight:"699", marginTop:"-100px", marginLeft:"270px"}}>Храм:<br/>
                Корпоративный портал</h1>
                <NavLink
  to="/" // Измените href на to
  style={{
    position: "absolute",
    fontSize: "18px",
    marginTop: hovered ? "262px" : "267px",
    marginLeft: hovered ? "83px" : "58px", // Смещение вправо при наведении
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
    marginLeft: "47px", // Зафиксировано
    marginTop: "280px",
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
    fontWeight: "600",
    display: 'inline-block',
    textAlign: 'center',
    marginTop: "465px",
    marginLeft: "-535px",
    zIndex: "11",
    fontSize: '1.2em',
    color: hovered ? 'white' : 'black'
  }}
  className="start-project"
  onMouseEnter={() => this.setHovered(true)}
  onMouseLeave={() => this.setHovered(false)}
>
  Заказать<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}>&nbsp;&nbsp;&nbsp;></span>
</NavLink>
                <p style={{position:"absolute", width:"519px", marginTop:"50px", marginLeft:"50px", fontSize:"20px"}}>Такой сайт помогает представить все товары и услуги с подробным описанием, характеристиками, схемами, преимуществами и формой заказа.
                Чтобы пользователь мог легко выбрать нужный товар, сделаем фильтры, добавим блоки с сопутствующими товарами, выведем окно поиска.
</p>    
                </Col>
            </Row>
        </Container>
        <Container>
            <img src={Fon3} style={{position:"relative", marginTop:"1400px", marginLeft:"-300px"}}/>
            <h1 style={{position:"absolute",color:"white",fontSize:"72px", fontWeight:"699" ,marginTop:"-650px",marginLeft:"650px"}}>Сайт который <br/>
            вы получите</h1>
            <p style={{position:"absolute",color:"white",fontSize:"20px", marginTop:"-450px",marginLeft:"650px"}}>При разработке сайта «под ключ», вы получаете не только<br/> эффективный инструмент , но и комплексный интернет<br/> маркетинг за разумную цену</p>
            <Row style={{marginTop:"-300px"}}>
                <Col>
                <img src={InYan} style={{position:"absolute",zIndex:"2"}} />
                <h1 style={{position:"absolute",color:"white",fontSize:"20px",  marginLeft:"100px"}}>Быстрый: </h1>
                <p style={{position:"absolute",color:"white",fontSize:"20px", marginTop:"25px", marginLeft:"100px"}}>никаких долгих загрузок</p>
                </Col>
                <Col style={{marginLeft:"320px"}}>
                <img src={InYan} style={{position:"absolute",zIndex:"2"}} />
                <h1 style={{position:"absolute",color:"white",fontSize:"20px", marginLeft:"100px"}}>Надежный: </h1>
                <p style={{position:"absolute",color:"white",fontSize:"20px", marginTop:"25px", marginLeft:"100px"}}>техподдержка проекта</p>
                </Col>
                <Col style={{marginLeft:"320px"}}>
                <img src={InYan} style={{position:"absolute",zIndex:"2"}}/>
                <h1 style={{position:"absolute",color:"white",fontSize:"18px", marginLeft:"100px"}}>Уникальный: никаких </h1>
                <p style={{position:"absolute",color:"white",fontSize:"18px", marginTop:"25px", marginLeft:"100px"}}>шаблонных решений</p>
                </Col>
            </Row>
            <Row style={{marginTop:"130px"}}>
                <Col>
                <img src={InYan} style={{position:"absolute",zIndex:"2"}} />
                <h1 style={{position:"absolute",color:"white",fontSize:"20px",  marginLeft:"100px"}}>Адаптивный: удобный </h1>
                <p style={{position:"absolute",color:"white",fontSize:"20px", marginTop:"25px", marginLeft:"100px"}}>с любого устройства</p>
                </Col>
                <Col style={{marginLeft:"320px"}}>
                <img src={InYan} style={{position:"absolute",zIndex:"2"}} />
                <h1 style={{position:"absolute",color:"white",fontSize:"20px", marginLeft:"100px"}}>Удобный: простой для  </h1>
                <p style={{position:"absolute",color:"white",fontSize:"20px", marginTop:"25px", marginLeft:"100px"}}>восприятия и покупок</p>
                </Col>
                <Col style={{marginLeft:"320px"}}>
                
                <h1 style={{position:"absolute",color:"white",fontSize:"18px", marginLeft:"100px"}}>Безошибочный: идеальна </h1>
                <p style={{position:"absolute",color:"white",fontSize:"18px", marginTop:"25px", marginLeft:"100px"}}>работа без сбоев</p>
                <img src={InYan} style={{position:"relative",zIndex:"2"}}/>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}



