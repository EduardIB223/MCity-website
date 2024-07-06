import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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

export default class StartProject extends Component {
  render() {
    return (
      <div>
        <Container className="ms-50">
            <h1 style={{position:"absolute", marginLeft:"800px", fontSize:"80px", fontWeight:"699", zIndex:"1", marginTop:"50px"}}>Разработка</h1>
            <p style={{position:"absolute", marginLeft:"1240px", fontSize:"20px", fontWeight:"699", zIndex:"1", marginTop:"280px"}}>Наши самураи каждый день стоят<br/> на стражи хороших сайтов</p>
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
                <a href="/" ><img src={Order} style={{position:"absolute", marginTop:"450px", marginLeft:"-550px"}}/></a>
                <p style={{position:"absolute", width:"550px", marginTop:"50px", marginLeft:"50px", fontSize:"20px"}}>Это продающая страница об одном продукте, услуге или  мероприятии. Создается под рекламу или PR-активность.
Сайт «цепляет» посетителя с первых секунд и ведет к целевому действию (покупке, регистрации, заявке) — через преимущества, подробные описания и видеоролики к форме заказа и контактам.
</p>    
                </Col>
                <Col>
                <img src={Hram1} />
                <h1 style={{position:"absolute", fontSize:"32px", fontWeight:"699", marginTop:"-100px", marginLeft:"270px"}}>Храм:<br/>
                Сайт-каталог</h1>
                <a href="/" ><img src={Order} style={{position:"absolute", marginTop:"450px", marginLeft:"-550px"}}/></a>
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
                <a href="/" ><img src={Order} style={{position:"absolute", marginTop:"450px", marginLeft:"-550px"}}/></a>
                <p style={{position:"absolute", width:"550px", marginTop:"50px", marginLeft:"50px", fontSize:"20px"}}>Это продающая страница об одном продукте, услуге или  мероприятии. Создается под рекламу или PR-активность.
Сайт «цепляет» посетителя с первых секунд и ведет к целевому действию (покупке, регистрации, заявке) — через преимущества, подробные описания и видеоролики к форме заказа и контактам.
</p>    
                </Col>
                <Col>
                <img src={Hram3} />
                <h1 style={{position:"absolute", fontSize:"30px", fontWeight:"699", marginTop:"-100px", marginLeft:"270px"}}>Храм:<br/>
                Корпоративный портал</h1>
                <a href="/" ><img src={Order} style={{position:"absolute", marginTop:"450px", marginLeft:"-550px"}}/></a>
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
        <Container className="ms-50">
            <img src={Oblako7} alt="/" style={{position:"absolute", marginLeft:"800px", marginTop:"20px"}} />
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
