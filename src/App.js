import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import StudentList from "./components/students/StudentList";
import StudentDetail from "./components/students/StudentDetail";
import Menu from "./components/menu/Menu";
import ServiceList from "./components/services/ServiceList"
import AddStudent from "./components/students/AddStudent"

import { Route, Switch } from "react-router-dom";
import Navi from "./components/navi/Navi";

const socket = require("socket.io-client");

export default class App extends Component {

  connectToSocket() {
    socket.io.connect("http://localhost:3000")
  }


  render() {
    return (
      <div>
        <Row>
          <Navi></Navi>
        </Row>
        <Row style={{marginTop:"30px"}}>
          <Col xs={2} style={{marginLeft:"30px"}}>
            <Menu></Menu>
          </Col>
          <Col md={9}>
            <Switch>
              <Route exact path="/students" children={<StudentList />}></Route>
              <Route path="/students/:id">
                <StudentDetail />
              </Route>
              <Route exact path="/services" children={<ServiceList />}></Route>
              <Route exact path="/addStudent" children={<AddStudent/>}></Route>
              
            </Switch>
          </Col>
        </Row>
        <Row>
          
          
          <Col md={3}></Col>
        </Row>
      </div>
    );
  }
}
