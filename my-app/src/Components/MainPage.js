import React, { Component } from 'react'
import Carousel2 from './Carousel2'
import { Container, Carousel, CarouselItem, CarouselCaption} from 'react-bootstrap';
import fon from './Photo/Rectangle 10.svg';
import Bukva from './Photo/img_1_491_94126f.svg';
import Okruzhnost from './Photo/Ellipse 2.svg';
import Svechenie from './Photo/вапшгри 10.svg';
import City from './Photo/5a8fc211c47ea161c18e158d.svg';
import Oblako1 from './Photo/klipartz.com - 2020-12-29T161810 1.svg';
import Oblako2 from './Photo/02.svg';
import PoluKrug from './Photo/Subtract.svg';
import SvecheniePodPoluktugom from './Photo/вапшгри 3.svg';
import ZigZag from './Photo/Vector 2.svg';
import Svechenie2 from './Photo/Mask Group (1).svg'
import Svechenie3 from './Photo/Mask Group.svg'
import Oblako3 from './Photo/M сити.svg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card1 from './Photo/Group 4.svg'
import Card2 from './Photo/Group 5.svg'
import Card3 from './Photo/Group 6.svg'
import Card4 from './Photo/Group 7.svg'
import svecheniepodOblako2 from './Photo/svecheniepodOblako2.svg'
import Oblako4 from './Photo/Oblako2.svg'
import Dyadka from './Photo/dyadya.svg'
import svecheniepodDyadey from './Photo/svecheniepodDyadey.svg'
import beliyFonPodDyadey from './Photo/beliyFonPodDyadey.svg'
import CherniyFon from './Photo/CherniyFon.svg'
import ChernayaDroch from './Photo/Chernaya Droch.svg'
import ZelenayaDroch from './Photo/Group 13.svg'
import Card5 from './Photo/Group 138.svg'
import Card6 from './Photo/Group 139.svg'
import Card7 from './Photo/Group 140.svg'
import kvadratik from './Photo/Rectangle 12.svg';
import polosochka from './Photo/Rectangle 11.svg';
import train from './Photo/Group 78.svg'
import Oblako5 from './Photo/Group 69.svg'
import Zabor from './Photo/klipartz.com - 2020-12-30T133859 5.svg'
import drochKakayato from './Photo/Rectangle 87.svg'
import Zelenayhueta from './Photo/Rectangle 28.svg'
import afdasfeaf from './Photo/Mask Group54 1.svg'
import Oblako6 from './Photo/Group 14.svg'
import Step from './Photo/klipartz 2.svg'
import Plenka1 from './Photo/Group 78 (2).svg'
import fsdfsfewasf from './Photo/Mask Group54 2.svg'
import sdgfdf from './Photo/Group 141.svg'
import nextSlide from './Photo/Group 15.svg'
import prevSlide from './Photo/Vector.svg'
import Step2 from './Photo/klipartz 4.svg'
import girl from './Photo/Group 78 (5).svg'
import balckBG from './Photo/hjnifsd.svg'
import QuotMarks from './Photo/Group (1).svg'
import Carousel1 from './Carousel1'
import Footer from './Footer'
import WhiteArrow from './Photo/отправить.svg'
export const FontLink = () => {
  return (
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      rel="stylesheet"
    />
  );
};
export default class main extends Component {
  render() {
    return (
        <>
      <div>
        <Container className="ms-50">
            <img src={fon} alt="/" style={{maxWidth: "2140px", marginTop:"-68px" ,height:"auto", marginLeft:"-300px", zIndex:"-5"}} />
            <img src={Bukva} alt="/" style={{position:"absolute",marginTop:"-720px", width:"650px", marginLeft:"550px", zIndex:"4"}}/>
            <img src={Okruzhnost} alt="/" style={{position:"absolute",marginTop:"-680px", width:"838px", marginLeft:"460px", zIndex:"2"}}/>
            <img src={Svechenie} alt="/" style={{position:"absolute", marginTop:"-1050px", }}/> 
            <img src={City} alt="/" style={{position:"absolute", marginLeft:"-300px", marginTop:"-380px",  zIndex:"6"}} />
            <img src={Oblako1} alt="/" style={{position:"absolute", marginTop:"-850px", zIndex:"3", marginLeft:"30px"}} />
            <img src={Oblako2} alt="/" style={{position:"absolute", marginTop:"-350px", marginLeft:"-300px"}} />
            <img src={PoluKrug} alt="/" style={{position:"absolute", marginLeft:"550px", width:"660px"}} />
            <img src={SvecheniePodPoluktugom} alt="/" style={{position:"absolute", marginLeft:"640px", marginTop:"-80px"}} />
            <img src={ZigZag} alt="/" style={{position:"absolute", marginLeft:"730px", marginTop:"-10px"}} />
            <img src={Svechenie2} alt="/" style={{position:"absolute", marginTop:"-125px", marginLeft:"50px", zIndex:"-1"}} />
            <img src={Svechenie3} alt="/" style={{position:"absolute", marginTop:"-250px", marginLeft:"600px", zIndex:"-1"}} />
            <img src={Oblako3} alt="/" style={{position:"absolute", marginTop:"10px", marginLeft:"400px", zIndex:"4"}} />
            <h1 style={{position:"absolute", fontSize:"100px", marginTop:"-650px", zIndex:"7", marginLeft:"40px", fontWeight:"699"}} >WEB-ДИЗАЙН <br/> СТУДИЯ</h1>
            <h2 style={{position:"absolute", fontSize:"20px", marginTop:"-400px", zIndex:"7", marginLeft:"40px"}}>Давайте раскроем возможности вашего <br/> бизнеса вместе!</h2>
            <h1 style={{position:"absolute", marginTop:"200px", marginLeft:"150px", fontSize:"80px", fontWeight:"699"}} >Почему <br /> мы лучшие</h1>
            <p style={{position:"absolute", fontSize:"17px", marginTop:"430px", marginLeft:"150px"}} >Наш основной рабочий принцип - это полное взаимное доверие с<br/> Клиентом. Наша работа нацелена на результат, мы делаем<br/>интересные, качественные и нужные работы.</p>
        </Container>
        <Container className="ms-50" style={{position:"relative" ,left:"60px"}}>
          <Row>
            <Col lg="3">
              <img src={Card1} alt="/" style={{ marginTop:"540px",  width:"70%"}}  />
              <h1 style={{fontSize:"16px", fontWeight:"699"}} >Стратегия развития</h1>
              <p style={{fontSize:"14px"}}>Сопровождение проекта на <br /> этапе реализации до его <br /> полноценного запуска</p>
            </Col>
            <Col lg="3">
              <img src={Card2} alt="/" style={{ marginTop:"540px", width:"70%"}}  />
              <h1 style={{fontSize:"16px", fontWeight:"699"}} >Никаких шаблонов</h1>
              <p style={{fontSize:"14px"}}>Только индивидуальный дизайн с <br /> с учётом специфики сайта и всех <br /> пожеланий клиента</p>
            </Col>
            <Col lg="3">
              <img src={Card3} alt="/" style={{ marginTop:"540px", width:"70%"}}  />
              <h1 style={{fontSize:"16px", fontWeight:"699"}} >Адаптивность</h1>
              <p style={{fontSize:"14px"}}>Настраиваем сайт так, чтобы он <br />работал идеально на любых <br />устройствах</p>
            </Col>
            <Col lg="3">
              <img src={Card4} alt="/" style={{ marginTop:"540px", width:"70%"}}  />
              <h1 style={{fontSize:"16px", fontWeight:"699"}} >Забота о бизнесе</h1>
              <p style={{fontSize:"14px"}}>Проведём бесплатный аудит, <br /> внесём коррективы если нужно, <br /> запустим рекламу</p>
            </Col>
          </Row>
        </Container>
        <Container className="ms-50">
          <img src={svecheniepodOblako2} alt="/" style={{ position: "relative", left: "440px", top: "55px", width: "650px" }} />
          <img src={Oblako4} alt="/" style={{ position: "relative", right: "90px", top: "50px", width: "350px" }} />
          <img src={Dyadka} alt="/" style={{ position: "relative", bottom: "150px" }} />
          <img src={beliyFonPodDyadey} alt="/" style={{ position: "relative", bottom: "100px", right: "470px", zIndex: "-1" }} />
          <img src={svecheniepodDyadey} alt="/" style={{ position: "relative", bottom: "628px", right: "300px", zIndex: "-2" }} />
          <img src={CherniyFon} alt="/" style={{ position: "relative", bottom: "630px", right: "280px", zIndex: "2" }} />
          <img src={ChernayaDroch} alt="/" style={{ position: "relative", bottom: "631px", right: "281px", zIndex: "2" }} />
          <h1 style={{ position: "absolute", marginTop: "-750px", marginLeft: "40px", color: "white", zIndex: "3", fontSize: "90px" }}>Кто мы?</h1>
          <p style={{ fontSize: "18px", width: "600px", position: "relative", marginTop: "-990px", marginLeft: "700px" }}>Веб-дизайн студия MariupolCity.com - стабильно работающая на <br /> рынке IT-услуг компания, которой реализовано более 200 <br />интернет-проектов для наших Клиентов.
            <br /><br />
            Наши сотрудники обладают тремя важными качествами - <br /> честностью, ответственностью, стремлением быть лучшими в своем деле. Эти качества являются залогом прочных и долгосрочных отношений с нашими Клиентами.</p>
          <a style={{ position: "relative", marginLeft: "720px", fontSize: "20px", color: "black", textDecoration: "none", top: "60px" }} href='/'> Узнать больше > </a>
        </Container>
        <Container className="ms-50">
            <img src={ZelenayaDroch} alt="/" style={{position:"relative", marginTop:"90px", marginLeft:"-280px", zIndex:"-3"}} />
            <h1 style={{position:"relative", marginTop:"-700px", marginLeft:"700px", fontSize:"90px", fontWeight:"599" }} >Чем мы<br/>занимаемся? </h1>
            <p style={{position:"absolute", marginLeft:"700px", fontSize:"20px", }} >Мы предоставляем комплексный набор услуг для продвижения<br/>
            сайта, используя в работе инструменты онлайн маркетинга.</p>
          </Container>
          <Container className="ms-50">
            <Row>
              <Col>
              <img src={Card5} alt="/" style={{position:"absolute",width:"300px" ,marginTop:"180px", marginLeft:"50px", zIndex:"-2"}} />
              <h1 style={{position:"absolute", marginLeft:"160px", marginTop:"280px", fontSize:"20px", fontWeight:"699"}} >Web-дизайн</h1>
              <p style={{width:"250px", textAlign:"center", position:"absolute",marginLeft:"90px", marginTop:"330px"}} >Стилизация, идентификация и многое другое решает дизайн. Дизайн это то, что работает. Дизайн и креатив, совмещая которые можно уменьшить вложения в рекламу в несколько раз.</p>
              <a href="/" style={{position:"absolute",marginLeft:"145px", marginTop:"530px", color:"black", textDecoration:"none", fontSize:"20px" }} >Узнать больше></a>
              <img src={kvadratik} alt="/" style={{position:"relative",marginLeft:"145px", marginTop:"515px", zIndex:"-1"}} />
              <img src={polosochka} alt="/" style={{position:"absolute",marginLeft:"-55px", marginTop:"555px", width:"170px" }}/>
              </Col>
              <Col >
              <img src={Card6} alt="/" style={{position:"absolute",width:"300px" ,marginTop:"180px", marginLeft:"50px", zIndex:"-2"}} />
              <h1 style={{position:"absolute", marginLeft:"160px", marginTop:"280px", fontSize:"20px", fontWeight:"699"}} >Web-дизайн</h1>
              <p style={{width:"250px", textAlign:"center", position:"absolute",marginLeft:"90px", marginTop:"330px"}} >Стилизация, идентификация и многое другое решает дизайн. Дизайн это то, что работает. Дизайн и креатив, совмещая которые можно уменьшить вложения в рекламу в несколько раз.</p>
              <a href="/" style={{position:"absolute",marginLeft:"145px", marginTop:"530px", color:"black", textDecoration:"none", fontSize:"20px" }} >Узнать больше></a>
              <img src={kvadratik} alt="/" style={{position:"relative",marginLeft:"145px", marginTop:"515px", zIndex:"-1"}} />
              <img src={polosochka} alt="/" style={{position:"absolute",marginLeft:"-55px", marginTop:"555px", width:"170px" }}/>
              </Col>
              <Col>
              <img src={Card7} alt="/" style={{position:"absolute",width:"300px" ,marginTop:"180px", marginLeft:"50px", zIndex:"-2"}} />
              <h1 style={{position:"absolute", marginLeft:"160px", marginTop:"280px", fontSize:"20px", fontWeight:"699"}} >Web-дизайн</h1>
              <p style={{width:"250px", textAlign:"center", position:"absolute",marginLeft:"90px", marginTop:"330px"}} >Стилизация, идентификация и многое другое решает дизайн. Дизайн это то, что работает. Дизайн и креатив, совмещая которые можно уменьшить вложения в рекламу в несколько раз.</p>
              <a href="/" style={{position:"absolute",marginLeft:"145px", marginTop:"530px", color:"black", textDecoration:"none", fontSize:"20px" }} >Узнать больше></a>
              <img src={kvadratik} alt="/" style={{position:"relative",marginLeft:"145px", marginTop:"515px", zIndex:"-1"}} />
              <img src={polosochka} alt="/" style={{position:"absolute",marginLeft:"-55px", marginTop:"555px", width:"170px" }}/>
              </Col>
            </Row>
          </Container>
          <Container className="ms-50">
            <img src={train} alt="/" style={{width:"90%", position:"relative", left:"100px"}} />
            <img src={Oblako5} alt="/" style={{width:"25%", position:"relative", top:"-380px", left:"220px"}}/>
            <h1 style={{position:"relative", top:"-430px", left:"100px", fontSize:"70px", fontWeight:"699"}} > Как мы <br/> работаем</h1>
          </Container>
          <Container className="ms-50">
            <Row>
              <Col>
              <img src={Zabor} alt="/" style={{position:"relative", top:"-390px"}} />
              <h1 style={{position:"relative", top:"-460px", left:"100px", fontSize:"28px", fontWeight:"699"}}>Станция 1:<br/>
              Знакомство</h1>
              <p style={{position:"relative", top:"-450px", left:"100px", fontSize:"18px"}}>Погружаемся в нишу клиента ,<br/> проводим маркетинговое <br/>исследование рынка, анализ<br/> конкурентов по Украине.</p>
              </Col>
              <Col>
              <img src={Zabor} alt="/" style={{position:"relative", top:"-390px"}} />
              <h1 style={{position:"relative", top:"-460px", left:"100px", fontSize:"28px", fontWeight:"699"}}>Станция 2:<br/>
              Концепт</h1>
              <p style={{position:"relative", top:"-450px", left:"100px", fontSize:"18px"}}>Выделение преимуществ, разработка <br/> навигациии прототипов страниц,<br/> написание продающего текста.</p>
              </Col>
              <Col>
              <img src={Zabor} alt="/" style={{position:"relative", top:"-390px"}} />
              <h1 style={{position:"relative", top:"-460px", left:"100px", fontSize:"28px", fontWeight:"699"}}>Станция 3:<br/>
              SEO</h1>
              <p style={{position:"relative", top:"-450px", left:"100px", fontSize:"18px"}}>Структурируем разделы и страницы<br/>для продвижения по ключевым<br/> запросам. Строим внутреннюю <br/> структуру.</p>
              </Col>
            </Row>
            <Row>
              <Col>
              <img src={Zabor} alt="/" style={{position:"relative", top:"-390px"}} />
              <h1 style={{position:"relative", top:"-460px", left:"100px", fontSize:"28px", fontWeight:"699"}}>Станция 4:<br/>
              Дизайн</h1>
              <p style={{position:"relative", top:"-450px", left:"100px", fontSize:"18px"}}>Дизайн внутренних<br/> страниц, отрисовка модальных <br/>окон,проработка адаптивности для <br/> планшетов и смартфонов.</p>
              </Col>
              <Col>
              <img src={Zabor} alt="/" style={{position:"relative", top:"-390px"}} />
              <h1 style={{position:"relative", top:"-460px", left:"100px", fontSize:"28px", fontWeight:"699"}}>Станция 5:<br/>
              Программирование</h1>
              <p style={{position:"relative", top:"-450px", left:"100px", fontSize:"18px"}}>Верстка существующих разрешениях<br/> экранов, подключение необходимых <br/>модулей.</p>
              </Col>
              <Col>
              <img src={Zabor} alt="/" style={{position:"relative", top:"-390px"}} />
              <h1 style={{position:"relative", top:"-460px", left:"100px", fontSize:"28px", fontWeight:"699"}}>Станция 6:<br/>
              Запуск</h1>
              <p style={{position:"relative", top:"-450px", left:"100px", fontSize:"18px"}}>Структурируем разделы и страеицы<br/> для продвижения по ключевым <br/>запросам. Строим внутреннюю<br/> структуру</p>
              </Col>
            </Row>
          </Container>
          <Container className="ms-50">
            <img src={drochKakayato} alt="/" style={{position:"relative",  left:"750px", marginTop:"-700px"}} />
            <img src={Zelenayhueta} alt="/" style={{position:"absolute", marginLeft:"-1176px", marginTop:"-285px"}}/>
            <img src={afdasfeaf} alt="/" style={{position:"absolute", marginLeft:"-230px", marginTop: "-285px"}} />
            <img src={Oblako6} alt="/" style={{position:"absolute", marginLeft:"-500px", marginTop:"-455px", zIndex:"2" }} />
            <img src={Step} alt="/" style={{position:"absolute", marginTop:"-350px", marginLeft:"-100px"}} />
            <img src={Plenka1} alt="/" style={{position:"absolute",marginTop:"-50px",  marginLeft:"-770px", width:"450px", zIndex:"2"}}/>
            <img src={fsdfsfewasf} alt="/" style={{position:"absolute", marginLeft:"-750px", marginTop:"-280px", zIndex:"1" }} />
            <h1 style={{position:"absolute", marginLeft:"570px", fontSize:"70px", marginTop:"-70px", fontWeight:"699"}} >Наши клиенты</h1>
            <p style={{position:"absolute", marginLeft:"570px",  marginTop:"20px"}}>Давайте посмотрим плеку наших клиентов, здесь мы собрали<br/>только малую часть. Мы гарантируем эффективность нашей<br/>работы в кротчайшие сроки.</p>
            <img src={sdgfdf} alt="/" style={{position:"absolute", marginLeft:"-520px", marginTop:"240px", zIndex:"0", width:"450px" }} />
            <img src={nextSlide} alt="/" style={{position:"absolute",marginTop:"348px", marginLeft:"38px", zIndex:"-1" }} />
            <img src={prevSlide} alt="/" style={{position:"absolute",marginTop:"364px", marginLeft:"-15px", zIndex:"-1" }} />
            <img src={Step2} alt="/" style={{position:"absolute", marginTop:"250px", marginLeft:"-1000px"}} />
            <h1 style={{position:"absolute", marginTop:"285px", marginLeft:"810px", fontSize:"25px", fontWeight:"699"}} >Смотреть всех</h1>
            <img src={nextSlide} alt="/" style={{position:"absolute",marginTop:"1068px", marginLeft:"38px", zIndex:"1" }} />
            <img src={WhiteArrow} alt="/" style={{position:"absolute",marginTop:"1080px", marginLeft:"-465px", zIndex:"1" }} />
            <Carousel2 />
          </Container>
          <Container className="ms-50">
              <img src={girl} alt="/" style={{position:"absolute", marginLeft:"350px", marginTop:"80px"}} />
              <h1 style={{position:"absolute", marginTop:"200px", fontSize:"75px", marginLeft:"100px", fontWeight:"699"}} >Что о нас <br />говорят?</h1>
              <p style={{position:"absolute", marginTop:"400px", fontSize:"18px", marginLeft:"100px"}}>Давайте посмотрим плеку наших клиентов, здесь<br />
мы собрали только малую часть. Мы гарантируем<br />
эффективность нашей работы в кротчайшие сроки.</p>
              <img src={balckBG} alt="/"  style={{position:"absolute", marginLeft:"-330px", marginTop:"610px"}} />
              <img src={QuotMarks} alt="/" style={{position:"absolute", marginLeft:"90px", marginTop:"570px"}}/>
             <Carousel1 />
          </Container >
          
          <Footer />
      </div>
      </>
    )
  }
}