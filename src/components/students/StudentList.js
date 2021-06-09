import React, { Component } from "react";
import { Col,Button, Table, Row,Badge } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as studentActions from "../../redux/actions/studentActions";
import { MdDetails } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";


import "./StudentList.css";
import { Link } from "react-router-dom";

class StudentList extends Component {
  
  componentDidMount() {
    this.props.actions.getStudents();
  }

  render() {
    console.log(this.props);
    return (
      <div>
         <Row>
          <Col><h2>Öğrenciler</h2></Col>  
          
          <Col xs={1}><Link to="addStudent"><Button  color="warning"><MdAddCircle size="1.5em"/></Button></Link></Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Adı</th>
              <th>No</th>
              <th>Sınıfı</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            { this.props.students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.number}</td>
                    <td>{student.className}</td>
                    <td style={{ width: "122px" }}>
                      <div>
                        <Row>
                        <Link to={`/students/${student.id}`} style={{padding:"0px",display: "inline-block", width:"107px"}}>
                            <h5 style={{display:"inline"}}>
                              <span className="badge bg-success" style={{marginLeft:"10px"}}>
                           <MdDetails/>
                                Daha fazla
                              </span></h5>
                          </Link>
                        </Row>
                      </div>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    students: state.studentListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getStudents: bindActionCreators(studentActions.getStudents, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
