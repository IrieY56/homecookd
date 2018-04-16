import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render(){
    return(
      <div>Connected cart</div>
    )
  }
}

function mapStateToProps(){
  return;
}

export default connect(mapStateToProps)(Cart);
