import React, { Component } from 'react';
import OrderList from './OrderList';

class SellerAccount extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){

  }
  render(){
    return(
      <div>
        <OrderList />
      </div>
    )
  }
}
export default SellerAccount;
