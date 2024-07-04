import React, { Component } from 'react';
import { Container, NavLink, Navbar, NavbarBrand, Nav } from 'react-bootstrap';
import logo from './Photo/logo.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import tochka from './Photo/Ellipse 3.svg';
import kvadratik from './Photo/Rectangle 12.svg';
import polosochka from './Photo/Rectangle 11.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="md">
          <Container className="ms-50" style={{ position: "relative", left: "170px", zIndex: "10" }}>
            <Navbar.Brand as={Link} to="/">
              <img
                src={logo}
                className="d-flex align-top"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto text-center">
                <NavLink as={Link} to="/" style={{ fontSize: "20px", paddingLeft: "25px" }}>Главная</NavLink>
                <NavLink style={{ position: "absolute", left: "260px", top: "30px" }}><img src={tochka} /></NavLink>
                <NavLink as={Link} to="/about" style={{ fontSize: "20px", paddingLeft: "25px" }}>О нас</NavLink>
                <NavLink style={{ fontSize: "20px", paddingLeft: "25px" }} href="/">Услуги</NavLink>
                <NavLink style={{ fontSize: "20px", paddingLeft: "25px" }} href="/">Портфолио</NavLink>
                <NavLink style={{ fontSize: "20px", paddingLeft: "25px" }} href="/">Контакты</NavLink>
                <NavLink style={{ position: "absolute", fontSize: "20px", marginLeft: "568px", top: "0px" }} href="/"><img src={kvadratik} /></NavLink>
                <NavLink style={{ position: "absolute", fontSize: "20px", marginLeft: "568px", top: "16px" }} href="/"><img src={polosochka} /></NavLink>
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
  }
}
