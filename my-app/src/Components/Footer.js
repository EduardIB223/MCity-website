import React, { useState, useEffect } from 'react';
import { Container, NavLink, Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from './Photo/logo.svg';
import tochka from './Photo/Ellipse 3.svg';
import '../App.css';
import Phone from './Photo/Group 137.svg';
import Lineya from './Photo/Group19.svg';
import Fon2 from './Photo/Rectangle 106.svg';
import kvadratik from './Photo/Rectangle 12.svg';
import polosochka from './Photo/Rectangle 11.svg';
import Cloud4 from './Photo/Group 20.svg';

const Footer = ({ style }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const getTochkaStyle = (path) => {
    return activeLink === path ? { display: 'block' } : { display: 'none' };
  };

  const topLinks = [
    { path: "/", label: "Главная" },
    { path: "/about", label: "О нас" },
    { path: "/Price", label: "Услуги" },
    { path: "/Clients", label: "Портфолио" },
    { path: "/Contact", label: "Контакты" },
  ];

  const bottomLinks = [
    { path: "/Price", label: "Цены" },
    { path: "/WebDesigne", label: "Web-дизайн" },
    { path: "/Promotion", label: "Продвижение" },
    { path: "/StartProject", label: "Создание сайтов" },
  ];

  const linkStyle = { fontSize: "20px", paddingLeft: "25px", position: 'relative', display: 'inline-block', textAlign: 'center', fontWeight: '600' };

  return (
    <div style={{ ...style, position: 'relative', zIndex: 10 }}>
      <Container className="ms-50" style={{ marginBottom: '100px', transform: 'translateY(-100px)' }}>
        <img src={Cloud4} alt="/" style={{ position: "absolute", marginLeft: "700px", marginTop: "-350px", zIndex: "2" }} />
        <p style={{ position: "absolute", marginTop: "-210px", fontSize: "20px", marginLeft: "130px" }}>
          За 12 лет мы накопили огромный опыт в разработке сайтов и<br /> интернет-магазинов. Для большинства задач уже разработаны<br /> готовые решения конкретно под вашу отрасль и тип бизнеса, что <br /> позволяет сократить расходы и время на запуск.<br /><br />
          Мы подберём или разработаем оптимальное решение для вас. <br />Просто напишите нам или позвоните чтобы обсудить проект.
        </p>
        <img src={Phone} alt="/" style={{ position: "absolute", marginTop: "70px", marginLeft: "120px" }} />
        <h1 style={{ position: 'absolute', marginLeft: '450px', fontSize: "25px", fontWeight: "699", marginTop: "80px" }}>Получите бесплатную <br /> консультацию</h1>
        <p style={{ position: 'absolute', marginLeft: '460px', fontSize: "16px", marginTop: "147px" }}>Имя</p>
        <p style={{ position: 'absolute', marginLeft: '700px', fontSize: "16px", marginTop: "147px" }}>Телефон</p>
        <input type='text' placeholder='Анна' style={{ position: "absolute", marginLeft: "450px", marginTop: "170px", width: "228px", height: "40px", border: "0", backgroundColor: "rgb(221, 221, 221)" }}></input>
        <input type='text' placeholder='+7(949)123-32-21' style={{ position: "absolute", marginLeft: "690px", marginTop: "170px", width: "228px", height: "40px", border: "0", backgroundColor: "rgb(221, 221, 221)" }}></input>
        <a href='/' style={{ position: "absolute", marginLeft: "1000px", marginTop: "170px", fontSize: "20px", textDecoration: "none", color: "black", fontWeight: "bold" }}>Отправить></a>
        <img src={kvadratik} alt="/" style={{ position: "absolute", marginLeft: "1000px", marginTop: "156px", fontSize: "20px", zIndex: "-1" }} />
        <img src={polosochka} alt="/" style={{ position: "absolute", marginLeft: "990px", marginTop: "195px", fontSize: "20px", width: "140px", zIndex: "-1" }} />
        <img src={Lineya} alt="/" style={{ position: "absolute", marginTop: "286px", width: "1920px", marginLeft: "-310px", zIndex: "2" }} />
        <img src={Fon2} alt="/" style={{ position: "absolute", marginTop: "290px", width: "1920px", marginLeft: "-310px" }} />
        <p style={{ position: "absolute", marginTop: "460px", fontSize: "16px", marginLeft: "775px", textAlign: "right" }}>
          Заказывая у нас услугу вы можете быть уверены,<br />
          что получите эффективный инструмент для<br />
          реализации своих идей
        </p>
        <h1 style={{ position: "absolute", textAlign: "left", marginTop: "465px", fontSize: "20px", marginLeft: "124px", fontFamily: "Raleway", fontWeight: 1000, lineHeight: "35.2px", letterSpacing: "0.02em" }}>Телефон:</h1>
        <h1 style={{ position: "absolute", textAlign: "left", marginTop: "465px", fontSize: "20px", marginLeft: "350px", fontFamily: "Raleway", fontWeight: 1000, lineHeight: "35.2px", letterSpacing: "0.02em" }}>Почта:</h1>
        <h1 style={{ position: "absolute", textAlign: "left", marginTop: "495px", fontSize: "20px", marginLeft: "124px", fontFamily: "Raleway", fontWeight: 1000, lineHeight: "35.2px", letterSpacing: "0.02em" }}>+7(949)123-32-21</h1>
        <h1 style={{ position: "absolute", textAlign: "left", marginTop: "495px", fontSize: "20px", marginLeft: "350px", fontFamily: "Raleway", fontWeight: 1000, lineHeight: "35.2px", letterSpacing: "0.02em" }}>example@gmail.com</h1>
      </Container>
      <Navbar collapseOnSelect expand="md">
        <Container className="ms-50" style={{ position: "relative", zIndex: "10", marginTop: "50px" }}>
          <Navbar.Brand as={Link} to="/" style={{ position: "absolute", left: "1000px" }}>
            <img src={logo} className="d-flex align-top" alt="Logo" style={{ width: "403px", marginLeft: "-250px", marginTop: "150px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-center" style={{ marginTop: "110px", marginLeft: "100px" }}>
              {topLinks.map((item, index) => (
                <NavLink key={index} as={Link} to={item.path} style={linkStyle}>
                  <div style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
                    {item.label}
                    <img src={tochka} style={{ ...getTochkaStyle(item.path), position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '5px' }} alt="Tochka" />
                  </div>
                </NavLink>
              ))}
            </Nav>
            <Nav className="me-auto text-center" style={{ marginTop: "230px", marginLeft: "-1155px" }}>
              {bottomLinks.map((item, index) => (
                <NavLink key={index} as={Link} to={item.path} style={linkStyle}>
                  <div style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
                    {item.label}
                    <img src={tochka} style={{ ...getTochkaStyle(item.path), position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '5px' }} alt="Tochka" />
                  </div>
                </NavLink>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
