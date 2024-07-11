import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Shapka from './Photo7/космонавт картинка.svg'
import Cloud1 from './Photo7/цитата м сити.svg'
import Spaceship from './Photo7/картнка кораблик.svg'
import Card1 from './Photo7/картинка1.svg'
import Card2 from './Photo7/картинка2.svg'
import Card3 from './Photo7/картинка3.svg'
import Order from './Photo6/заказать.svg'
import Sputnik from './Photo7/спутник.svg'
import get from './Photo7/Group 143.svg'
import Shark from './Photo7/картинка кит.svg'
import Cloud2 from './Photo7/M сити.svg'
import ConStar from './Photo7/созвездие.svg'
import ConStar2 from './Photo7/созвездие 2.svg'
import ConStar3 from './Photo7/созвездие 3.svg'
import ConStar4 from './Photo7/созвездие 4.svg'
import Alien from './Photo7/гуманоид.svg'
import BlackBG from './Photo7/Rectangle 292.svg'
import UFO from './Photo7/ufo-неопознанный-етающий-объект-и-юстрация-вектора-етающей-таре-ки-66718448 3.svg'
import UndLine from './Photo7/Vector 180.svg'
import Footer from './Footer'

export default class WebDesigne extends Component {
  render() {
    return (
        <>
      <div>
            <Container className="ms-50">
                <p style={{position:"absolute", marginTop:"180px", fontSize:"20px", zIndex:"1",marginLeft:"150px"}} >Удобный и понятный интерфейс</p>
                <h1  style={{position:"absolute", marginTop:"200px", fontSize:"72px",fontWeight:"699" ,zIndex:"1",marginLeft:"150px"}} >Вселенная<br/> дизайна</h1>
                <img src={Cloud1} alt="/" style={{position:"absolute", marginTop:"430px", fontSize:"72px",fontWeight:"699" ,zIndex:"1",marginLeft:"250px"}}/>
                <img src={Shapka}  alt="/"style={{position:"relative", marginLeft:"-300px"}}/>
            </Container>
            <Container className="ms-50">
                <img src={Spaceship} alt="/" style={{position:"absolute", marginTop:"-230px", zIndex:"-1", marginLeft:"-100px"}}/>
                <h1 style={{position:"absolute", marginTop:"150px", fontSize:"72px",fontWeight:"699" ,zIndex:"1",marginLeft:"650px"}}>Что мы творим?</h1>
                <p style={{position:"absolute", marginTop:"250px", fontSize:"20px" ,zIndex:"1",marginLeft:"650px"}}>Мы создали необычные планеты разработки дизайна. Просто <br/>выберете нужную вам и отправтесь на нашем звездолете</p>
                <Row style={{position:"absolute",marginTop:"400px"}}>
                    <Col style={{marginLeft:"100px"}}>
                    <img src={Card1} alt="/" />
                    <h1 style={{position:"absolute", fontSize:"25px", marginTop:"-310px", marginLeft:"20px"}}>Индивидуальный дизайн</h1>
                    <p style={{position:"absolute", fontSize:"18px", marginTop:"-250px", marginLeft:"20px"}}>Реализация любых нестандартных и<br/> стандартных веб-решений в<br/> области дизайна и функционала<br/> ресурса. Создание вашего бренда и<br/> узнаваемости, повышение имиджа<br/> компании в глазах покупателей.</p>
                    <a href="/"><img src={Order} style={{position:"absolute",marginTop:"470px", marginLeft:"-350px"}} /></a>
                    </Col>
                    <Col>
                    <img src={Card2} alt="/" />
                    <h1 style={{position:"absolute", fontSize:"25px", marginTop:"-300px", marginLeft:"20px"}}>Редизайн сайта</h1>
                    <p style={{position:"absolute", fontSize:"18px", marginTop:"-240px", marginLeft:"20px"}}>Если имеется неудовлетворение, но<br/> техническая часть годная (это может<br/>определить технический специалист <br/> после анализа), то достаточно будет <br/> провести редизайн сайта <br/> (ребрендинг сайта) для его <br/>улучшения.</p>
                    <a href="/"><img src={Order} style={{position:"absolute",marginTop:"470px", marginLeft:"-350px"}} /></a>
                    </Col>
                    <Col>
                    <img src={Card3} alt="/" />
                    <h1 style={{position:"absolute", fontSize:"25px", marginTop:"-290px", marginLeft:"20px"}}>Создание логотипа</h1>
                    <p style={{position:"absolute", fontSize:"18px", marginTop:"-230px", marginLeft:"20px"}}>С помощью логотипа – мы донесем до<br/> целевой аудитории компании ее<br/> идею.Это то что позволяет любому<br/> человеку сразу, с первого же взгляда<br/> понять, в какой сфере работает<br/> организация и каковы ее <br/> особенности.</p>
                    <a href="/"><img src={Order} style={{position:"absolute",marginTop:"470px", marginLeft:"-350px"}} /></a>
                    </Col>
                </Row>
            </Container>
            <Container className="ms-50">
                <img src={Sputnik} alt="/" style={{position:"relative", marginTop:"1000px", marginLeft:"100px"}}/>
                <h1 style={{position:"absolute" ,marginLeft:"500px", fontSize:"24px", marginTop:"-350px"}}>Кажется спутник передает какое то послание на землю</h1>
                <p style={{position:"absolute" ,marginLeft:"500px", fontSize:"18px", marginTop:"-300px"}}>Мы стремимся к созданию красивых сайтов, но не верим в красоту ради красоты.<br/> Мы считаем, что непременное условие красивого дизайна – его функциональность.<br/> Можно, конечно, заказать прекрасный дизайн сайта, но если сайт не окажется <br/>удобным, вы не сможете конвертировать красоту в прибыль. </p>
                <p style={{position:"absolute" ,marginLeft:"500px", fontSize:"18px", marginTop:"-160px"}}>Именно поэтому основными принципами в нашей работе являются оригинальность<br/> концепции, точность исполнения (и соблюдения сроков сдачи проекта!), внимание к<br/> деталям, а также предельная функциональность готового дизайна.
                Мы предлагаем<br/> создать для вас красивый, полезный и удобный сайт.</p>
            </Container>
            <Container className="ms-50">
                <img src={get} alt="/" style={{position:"relative", marginLeft:"460px"}} />
                <h1 style={{position:"absolute", marginTop:"-130px", fontSize:"72px", fontWeight:"699"}} >С нами <br/>
                вы получите</h1>
                <p style={{position:"absolute", marginTop:"70px", fontSize:"20px"}}>Персонализированный современный дизайн с учетом <br/>специфики бизнеса; проработанный интерфейс, который<br/> 
                удобен для пользователей;конверсионные пути, триггеры и<br/> точки контакта, заложенные в дизайн; </p>
                <p style={{position:"absolute", marginTop:"70px",marginLeft:"700px" ,fontSize:"20px"}}>Визуальное оформление с использованием фирменного стиля <br/>компании; полная адаптивность страниц под мобильные<br/> гаджеты и веб-браузеры; комфортная и логичная навигация<br/> для быстрого поиска товаров и услуг.</p>
            </Container>
            <Container className="ms-50">
                <img src={Shark} alt="/" style={{position:"absolute", marginLeft:"-300px", marginTop:"-30px", zIndex:"-1"}}/>
                <img src={Cloud2} alt="/" style={{position:"relative" , marginTop:"280px" , marginLeft:"200px"}}/>
                <h1 style={{position:"absolute", marginTop:"-50px", fontSize:"72px", fontWeight:"699", marginLeft:"50px"}} >Полное <br/>
                погружение <br/>
                в Ваш бизнес</h1>
                <Row style={{ marginTop:"300px", marginLeft:"50px", }} >
                    <Col>
                    <img src={ConStar} alt="/" />
                    <h1 style={{position:"absolute", marginTop:"10px", fontSize:"36px", fontWeight:"699"}} >Уникальный прототип</h1>
                    <p style={{position:"absolute", marginTop:"70px", fontSize:"20px"}}>Мы не используем шаблонные решения — разрабатываем <br/> уникальный прототип для каждого проекта. Разработка с нуля <br/> позволяет полностью реализовать поставленные перед <br/> проектом задачи: создать удобный для пользователей <br/> интерфейс (UI-kit), разработать понятную структуру и  <br/>
                    логику работы сайта.</p>
                    </Col>
                    <Col style={{marginLeft:"200px"}} >
                    <img src={ConStar2} alt="/" />
                    <h1 style={{position:"absolute", marginTop:"10px", fontSize:"36px", fontWeight:"699"}} >Уникальный прототип</h1>
                    <p style={{position:"absolute", marginTop:"70px", fontSize:"20px"}}>Мы не используем шаблонные решения — разрабатываем <br/> уникальный прототип для каждого проекта. Разработка с нуля <br/> позволяет полностью реализовать поставленные перед <br/> проектом задачи: создать удобный для пользователей <br/> интерфейс (UI-kit), разработать понятную структуру и  <br/>
                    логику работы сайта.</p>
                    </Col>
                </Row>
                <Row style={{ marginTop:"340px", marginLeft:"50px"}} >
                    <Col>
                    <img src={ConStar3} alt="/" />
                    <h1 style={{position:"absolute", marginTop:"10px", fontSize:"36px", fontWeight:"699"}} >Удобство для пользователя</h1>
                    <p style={{position:"absolute", marginTop:"70px", fontSize:"20px"}}>При разработке веб-сайта создается пользовательский<br/> интерфейс (UI) с интуитивно понятным и удобным для<br/> пользователя расположением всех элементов управления, что<br/> позволяет разместить конверсионные блоки в точках захвата<br/> внимания для высокой конверсии сайта.</p>
                    </Col>
                    <Col style={{marginLeft:"200px"}} >
                    <img src={ConStar4} alt="/" />
                    <h1 style={{position:"absolute", marginTop:"10px", fontSize:"36px", fontWeight:"699"}} >Адаптивность</h1>
                    <p style={{position:"absolute", marginTop:"70px", fontSize:"20px"}}>Разработанный дизайн сайта полностью совместим со<br/> всеми мобильными устройствами, а также корректно<br/> отображается во всех веб-браузерах. Страницы веб-сайта<br/> полностью адаптивны для использования на любом гаджете.</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 style={{position:"absolute", marginTop:"460px",marginLeft:"800px", fontSize:"72px", fontWeight:"699"}}>Почему без<br/> дизайна <br/>
                никак?</h1>
                <p style={{position:"absolute", fontSize:"20px", marginTop:"760px",marginLeft:"800px"}}>Гуманоид здесь чтобы поведает нам одну<br/> очень важную истину, он знаент ответ на наш<br/> сложный вопрос</p>
                <img src={Alien} alt="/" style={{position:"relative", marginTop:"300px" , marginLeft:"-280px"}}/>
                <img src={BlackBG} alt="/" style={{position:"absolute",marginTop:"870px", marginLeft:"-1400px"}} />
                <Row style={{marginTop:"50px"}} >
                    <Col>
                    <img src={UFO} alt="/" style={{position:"absolute"}} />
                    <p style={{position:"absolute" , color:"white", marginTop:"90px", fontSize:"20px"}}>Воплощает фирменный стиль компании,<br/> повышает узнаваемость фирмы,<br/> облегчает поиск нужной информации</p>
                    <img src={UndLine} alt="/" style={{position:"absolute" ,  marginTop:"190px"}} />
                    </Col>
                    <Col>
                    <img src={UFO} alt="/" style={{position:"absolute"}} />
                    <p style={{position:"absolute" , color:"white", marginTop:"90px", fontSize:"20px"}}>Управляет вниманием посетителя не<br/>препятствуя быстрой загрузке страниц и <br/> ведя его к нужной цели</p>
                    <img src={UndLine} alt="/" style={{position:"absolute" ,  marginTop:"190px"}} />
                    </Col>
                    <Col>
                    <img src={UFO} alt="/" style={{position:"absolute"}}/>
                    <p style={{position:"absolute" , color:"white", marginTop:"90px", fontSize:"20px"}}>Привлекает посетителя, <br/>заинтересовывает, вызывает ощущение <br/>комфорта от пребывания на странице</p>
                    <img src={UndLine} alt="/" style={{position:"absolute" ,  marginTop:"190px"}} />
                    </Col>
                </Row>
            </Container>
      </div>
      </>
    )
  }
}
