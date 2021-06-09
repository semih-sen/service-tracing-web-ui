import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";



function StudentDetail(){
  let {id }= useParams();
  
    return (
      <div>
        <h2>Öğrenci Bilgileri</h2>
       
      </div>
    );
  
}

export default connect()(StudentDetail);
