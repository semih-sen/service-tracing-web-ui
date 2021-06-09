import React, { Component } from "react";
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as serviceActions from "../../redux/actions/serviceActions";

class AddStudent extends Component {

  componentDidMount() {
    this.props.actions.getServices();
  }

  render() {
    return (
      <div>
        <h2>Yeni öğrenci</h2>
        <Form>
          <Row>
            <Col xs={4}>
              <FormGroup>
                <Label for="name">Adı</Label>
                <Input type="text"></Input>
              </FormGroup>
            </Col>
            <Col xs={2}>
              <FormGroup>
                <Label for="className">Sınıfı</Label>
                <Input type="text"></Input>
              </FormGroup>
            </Col>

            <Col xs={2}>
              <FormGroup>
                <Label for="className">Okul numarası</Label>
                <Input type="text"></Input>
              </FormGroup>
            </Col>

            <Col xs={2}>
              <FormGroup>
                <Label for="className">Öğrenci telefeonu</Label>
                <Input type="text" maxLength="10"></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col xs={4}>
              <FormGroup>
                <Label for="">Öğrenci adresi</Label>
                <Input type="textarea"></Input>
              </FormGroup>
            </Col>
            <Col xs={6}>
              <FormGroup>
                <Label for="">Not</Label>
                <Input type="textarea"></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col xs={4}>
              <FormGroup>
                <Label for="">Veli adı</Label>
                <Input type="text"></Input>
              </FormGroup>
            </Col>
            <Col xs={3}>
              <FormGroup>
                <Label for="">Veli telefonu</Label>
                <Input type="text"></Input>
              </FormGroup>
            </Col>
            <Col xs={3}>
              <FormGroup>
                <Label for="">Veli e-postası</Label>
                <Input type="email"></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col xs={4}>
              <FormGroup>
                <Label for="">Veli Adresi</Label>
                <Input type="textarea"></Input>
              </FormGroup>
            </Col>
            <Col xs={6}>
              <FormGroup>
                <Label for="">Veli Not</Label>
                <Input type="textarea"></Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col xs={2}>
              <FormGroup>
                <Label for="">Servis</Label>
                <UncontrolledDropdown>
                  <DropdownToggle caret>Dropdown</DropdownToggle>
                  <DropdownMenu>
                    { 
                      this.props.services.map(service =>(
                        <DropdownItem>{service.name}</DropdownItem>
                      ))
                    }
                  </DropdownMenu>
                </UncontrolledDropdown>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    services: state.serviceListReducer,
    currentService: state.changeServiceReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getServices: bindActionCreators(serviceActions.getServices, dispatch),
      changeService: bindActionCreators(serviceActions.changeService, dispatch)
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(AddStudent);
