import React, { useState, useEffect } from 'react';
import { Container, NavLink, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import logo from './Photo/logo.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import tochka from './Photo/Ellipse 3.svg';
import kvadratik from './Photo/Rectangle 12.svg';
import polosochka from './Photo/Rectangle 11.svg';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; // Импорт стилей

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const getTochkaStyle = (path) => {
    return activeLink === path ? { display: 'block' } : { display: 'none' };
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="md">
        <Container className="ms-50" style={{ position: "relative", left: "170px", zIndex: "10" }}>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              className="d-flex align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-center">
              {[
                { path: "/", label: "Главная" },
                { path: "/about", label: "О нас" },
                { path: "/Price", label: "Услуги" },
                { path: "/Clients", label: "Портфолио" },
                { path: "/Contact", label: "Контакты" }
              ].map((item, index) => (
                <NavLink
                  key={index}
                  as={Link}
                  to={item.path}
                  style={{ fontSize: "20px", paddingLeft: "25px", position: 'relative', display: 'inline-block', textAlign: 'center' }}
                >
                  <div style={{ position: 'relative', display: 'inline-block', textAlign: 'center' }}>
                    {item.label}
                    <img src={tochka} style={{ ...getTochkaStyle(item.path), position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginTop: '5px' }} alt="Tochka" />
                  </div>
                </NavLink>
              ))}
              <NavLink style={{ position: "absolute", fontSize: "20px", marginLeft: "568px", top: "0px" }} href="/">
                <img src={kvadratik} alt="Kvadratik" />
              </NavLink>
              <NavLink style={{ position: "absolute", fontSize: "20px", marginLeft: "568px", top: "16px" }} href="/">
                <img src={polosochka} alt="Polosochka" />
              </NavLink>
              <NavDropdown title="Начать проект" style={{ fontSize: "20px", paddingLeft: "25px", fontWeight: "699" }} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
