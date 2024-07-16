import React, { Component } from 'react';
import { Container, NavLink } from 'react-bootstrap';
import fon1 from './Photo4/Rectangle 10.svg';
import cloud1 from './Photo4/klipartz.com - 2020-12-29T161810 4.svg';
import cloud2 from './Photo4/klipartz.com - 2020-12-29T161810 3.svg';
import Shy from './Photo4/вапшгри 3.svg';
import Kolo from './Photo4/klipartz.com - 2020-12-30T123812 1.svg';
import Cloud3 from './Photo4/klipartz.com - 2020-12-29T161810 2.svg';
import Globus from './Photo4/картинка п р.svg';
import Palka from './Photo4/Rectangle 144.svg';
import Cartochka from './Photo4/карточка.svg';
import separatedLine from './Photo4/Vector 91.svg';
import BlackBG from './Photo4/Rectangle 146.svg';
import Star from './Photo4/Star 3.svg';
import kvadratik from './Photo/Rectangle 12.svg';
import polosochka from './Photo/Rectangle 11.svg';
import './Animation/AktLink.css';

class ContactPage extends Component {
  state = {
    hovered: false
  };

  setHovered = (value) => {
    this.setState({ hovered: value });
  };

  render() {
    const { hovered } = this.state;

    return (
      <div>
        <Container>
          <img src={fon1} alt="/" style={{ position: "absolute", marginLeft: "-300px" }} />
          <img src={cloud1} alt="/" style={{ position: "absolute", marginLeft: "-300px", marginTop: "270px", zIndex: "1" }} />
          <img src={cloud2} alt="/" style={{ position: "absolute", marginLeft: "500px", marginTop: "0px", zIndex: "1" }} />
          <img src={Shy} alt="/" style={{ position: "absolute", marginLeft: "100px", marginTop: "5px" }} />
          <img src={Kolo} alt="/" style={{ position: "absolute", marginLeft: "420px", marginTop: "165px" }} />
          <img src={Cloud3} alt="/" style={{ position: "absolute", marginLeft: "550px", marginTop: "165px" }} />
          <img src={Globus} alt="/" style={{ position: "absolute", marginLeft: "620px", marginTop: "115px", zIndex: "4" }} />
          <img src={Palka} alt="/" style={{ position: "absolute", marginLeft: "545px", marginTop: "525px", zIndex: "3", width: "1073px" }} />
          <h1 style={{ position: "absolute", fontSize: "80px", fontWeight: "699", marginTop: "90px", marginLeft: "0px" }}>Контакты</h1>
          <p style={{ position: "absolute", fontSize: "20px", marginTop: "190px", marginLeft: "0px" }}>Хватит думать! Давайте работать вместе! Кратко<br /> опишите, что у вас уже есть и чего вы хотите достичь.</p>
          <img src={Cartochka} alt="/" style={{ position: "absolute", marginTop: "390px", zIndex: "4", marginLeft: "-40px" }} />
          <h1 style={{ position: "absolute", fontSize: "50px", fontWeight: "699", marginTop: "460px", marginLeft: "55px", zIndex: "10" }}>Оставить заявку</h1>
          <p style={{ position: "absolute", fontSize: "25px", marginTop: "540px", marginLeft: "65px", zIndex: "10" }}>Имя</p>
          <input type="text" placeholder='Анна' style={{ position: "absolute", width: "398px", height: "53px", fontSize: "25px", marginTop: "580px", marginLeft: "55px", zIndex: "10", border: "0", backgroundColor: "rgb(221, 221, 221)" }}></input>
          <p style={{ position: "absolute", fontSize: "25px", marginTop: "650px", marginLeft: "65px", zIndex: "10" }}>Телефон</p>
          <input type="text" placeholder='+7(949)123-32-21' style={{ position: "absolute", width: "398px", height: "53px", fontSize: "25px", marginTop: "700px", marginLeft: "55px", zIndex: "10", border: "0", borderWidth: "3px", backgroundColor: "rgb(221, 221, 221)" }}></input>
          <p style={{ position: "absolute", fontSize: "25px", marginTop: "770px", marginLeft: "65px", zIndex: "10" }}>Email</p>
          <input type="text" placeholder='@' style={{ position: "absolute", width: "398px", height: "53px", fontSize: "25px", marginTop: "820px", marginLeft: "55px", zIndex: "10", border: "0", backgroundColor: "rgb(221, 221, 221)" }}></input>
          <p style={{ position: "absolute", fontSize: "25px", marginTop: "880px", marginLeft: "65px", zIndex: "10" }}>Сообщение (необязательно)</p>
          <input type="text" placeholder='Расскажите о вашем проекте' style={{ position: "absolute", width: "398px", height: "228px", fontSize: "25px", marginTop: "940px", marginLeft: "55px", zIndex: "10", border: "0", backgroundColor: "rgb(221, 221, 221)" }}></input>





          <NavLink
            style={{ position: "absolute", fontSize: "20px", marginLeft: "203px", marginTop: "1200px", zIndex: "5" }}
            className={`kvadratik ${hovered ? 'hovered' : ''}`}
            href="/"
          >
            <img src={kvadratik} alt="Kvadratik" />
          </NavLink>
          <NavLink
            style={{ position: "absolute", fontSize: "20px", marginLeft: "168px", marginTop: "1218px", zIndex: "5" }}
            className={`ForPolosochka ${hovered ? 'hovered' : ''}`}
            href="/"
          >
            <img src={polosochka} alt="Polosochka" />
          </NavLink>
          <NavLink
            to="/"
            style={{
              position: 'absolute',
              display: 'inline-block',
              textAlign: 'center',
              marginTop: "1200px",
              marginLeft: "200px",
              zIndex: "11",
              fontSize: '1.5em',
              fontWeight: 'bold',
              color: hovered ? 'white' : 'black'
            }}
            className="start-project"
            onMouseEnter={() => this.setHovered(true)}
            onMouseLeave={() => this.setHovered(false)}
          >
            Отправить<span style={{ fontSize: '0.6em', fontWeight: 'bold' }}> ></span>
          </NavLink>






          <h1 style={{ position: "absolute", marginTop: "750px", marginLeft: "680px", fontSize: "25px" }} >Адрес:</h1>
          <p style={{ position: "absolute", marginTop: "780px", marginLeft: "680px", fontSize: "25px", fontWeight: "699" }}>ул. Архитектора Нильсена, <br />60, офис 111А</p>
          <img src={separatedLine} alt="/" style={{ position: "absolute", marginTop: "880px", marginLeft: "570px" }} />
          <h1 style={{ position: "absolute", marginTop: "930px", marginLeft: "680px", fontSize: "25px" }} >E-mail:</h1>
          <p style={{ position: "absolute", marginTop: "960px", marginLeft: "680px", fontSize: "25px", fontWeight: "699" }}>digitallabmrpl@gmail.com</p>
          <img src={separatedLine} alt="/" style={{ position: "absolute", marginTop: "1060px", marginLeft: "570px" }} />
          <h1 style={{ position: "absolute", marginTop: "1100px", marginLeft: "680px", fontSize: "25px" }} >Телефон:</h1>
          <p style={{ position: "absolute", marginTop: "1130px", marginLeft: "680px", fontSize: "25px", fontWeight: "699" }}>(096) 229-64-63</p>
          <img src={BlackBG} alt="/" style={{ position: "relative", marginTop: "1250px", marginLeft: "-300px", height:"750px"}} />
          <h1 style={{ position: "absolute", color: "white", fontSize: "70px", marginTop: "-650px", marginLeft: "-50px", fontWeight: "699" }} >С нами вы получите</h1>
          <img src={Star} alt="/" style={{ position: "absolute", marginTop: "-470px", marginLeft: "-50px" }} />
          <h1 style={{ position: "absolute", color: "#95DB3A", fontSize: "27px", marginTop: "-480px", marginLeft: "20px" }} >Соответствие <br />
            задачам и целям</h1>
          <p style={{ position: "absolute", color: "white", fontSize: "18px", marginTop: "-405px", marginLeft: "20px" }}>Уникальный дизайн,<br /> юзабилити, функционал<br /> сайт будет таким,<br /> каким вы его<br /> представляете.</p>
          <img src={Star} alt="/" style={{ position: "absolute", marginTop: "-470px", marginLeft: "510px" }} />
          <h1 style={{ position: "absolute", color: "#95DB3A", fontSize: "27px", marginTop: "-480px", marginLeft: "580px" }} >Готовность <br />
            к продвижению</h1>
          <p style={{ position: "absolute", color: "white", fontSize: "18px", marginTop: "-405px", marginLeft: "580px" }}>Мы учтем все<br /> нюансы разработки,<br /> чтобы ваш сайт вышел<br /> в ТОП выдачи.</p>
          <img src={Star} alt="/" style={{ position: "absolute", marginTop: "-490px", marginLeft: "1010px" }} />
          <h1 style={{ position: "absolute", color: "#95DB3A", fontSize: "27px", marginTop: "-480px", marginLeft: "1080px" }} >Профессионализм</h1>
          <p style={{ position: "absolute", color: "white", fontSize: "18px", marginTop: "-405px", marginLeft: "1080px" }}>Ваши задачи и <br /> ожидания - это наш <br /> приоритет.</p>
          <img src={Star} alt="/" style={{ position: "absolute", marginTop: "-200px", marginLeft: "-50px" }} />
          <h1 style={{ position: "absolute", color: "#95DB3A", fontSize: "27px", marginTop: "-200px", marginLeft: "20px" }} >Экономия <br />
            времени</h1>
          <p style={{ position: "absolute", color: "white", fontSize: "18px", marginTop: "-130px", marginLeft: "20px" }}>Мы быстро реагируем<br /> на запросы клиентов,<br /> сокращая время<br /> на разработку</p>
          <img src={Star} alt="/" style={{ position: "absolute", marginTop: "-200px", marginLeft: "510px" }} />
          <h1 style={{ position: "absolute", color: "#95DB3A", fontSize: "27px", marginTop: "-200px", marginLeft: "580px" }} >Оптимальные <br />
            сроки</h1>
          <p style={{ position: "absolute", color: "white", fontSize: "18px", marginTop: "-130px", marginLeft: "580px" }}>Даем реальные сроки<br /> выполнения работ, <br /> не нарушая их</p>
          <img src={Star} alt="/" style={{ position: "absolute", marginTop: "-210px", marginLeft: "1010px" }} />
          <h1 style={{ position: "absolute", color: "#95DB3A", fontSize: "27px", marginTop: "-200px", marginLeft: "1080px" }} >Цена</h1>
          <p style={{ position: "absolute", color: "white", fontSize: "18px", marginTop: "-130px", marginLeft: "1080px" }}>Наши цены доступны<br /> для каждого, а<br /> качество - на высоте!</p>
        </Container>
      </div>
    );
  }
}

export default ContactPage;
