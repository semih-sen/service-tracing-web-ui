import React, { Component } from "react";
import { Nav, Navbar, NavbarText, Row } from "reactstrap";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="dark">
          <Nav className="d-flex justify-content-center">
            <NavbarText className="text-light" style={{marginLeft:"10px",fontSize:"1.5em"}}>BURSA ANADOLU LİSESİ</NavbarText>
          </Nav>
          <NavbarText className="text-light" style={{marginRight:"10px",fontSize:"1.2rem"}}>Burak Muştu</NavbarText>
        </Navbar>
      </div>
    );
  }
}
