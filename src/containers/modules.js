import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modules from '../components/modules';

function moduleContainer(porps) {
  if(this.props.data == 'Student'){
    return <Modules />
  }
  else if(this.props.data == 'Tutor'){
    this.props.histroy.push("/dasboard");
  }
} 
const mapStateToProps = state => ({
    data: state.user.data
  })
    
export default connect( mapStateToProps,
)(moduleContainer)