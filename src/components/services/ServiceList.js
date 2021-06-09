import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as serviceActions from "../../redux/actions/serviceActions";
import { Row, Table } from "reactstrap";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

class ServiceList extends Component {

  componentDidMount() {
    this.props.actions.getServices();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Adı</th>
              <th>Plakası</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {this.props.services.map((service) => (
              <tr key={service.id}>
                <td>{service.name}</td>
                <td>{service.plate}</td>
                <td style={{ width: "122px" }}>
                  <div>
                    <Row>
                    <Link to={`/students/${service.id}`} style={{padding:"0px",display: "inline-block", width:"107px"}}>
                            <h5 style={{display:"inline"}}>
                              <span className="badge bg-warning" style={{marginLeft:"10px"}}>
                           <MdEdit/>
                                Düzenle
                              </span></h5>
                          </Link>
                    </Row>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    services: state.serviceListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getServices: bindActionCreators(serviceActions.getServices, dispatch),
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ServiceList);
