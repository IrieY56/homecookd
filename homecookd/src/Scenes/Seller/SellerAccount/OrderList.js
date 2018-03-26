import React, { Component } from 'react';
import axios from 'axios';
import { Divider, Segment } from 'semantic-ui-react';
import './OrderList.css';

const url = 'http://localhost:3001/api';
const api_token = localStorage.getItem('api_token');
var sellerOrders = ['order1', 'order2', 'order3', 'order4', 'order5', 'order6', 'order7', 'order8', 'order9'];

function getOrders(api_token){
  return axios.post(url + "/auth/information/seller", {
    api_token
  })
  .then(function(response) {
    console.log(response.data);
  })
}

class OrderList extends Component {
  constructor(props){
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {
    getOrders(api_token);
    this.setState({orders: sellerOrders}); //change to response.data.orders later
  }

  render() {
    return (
      <div className="container">
        <Segment>
          {
            this.state.orders.map((order, i) => <div className="itemStyle" key={i}>{order}<Divider segment/></div>)
          }
        </Segment>
      </div>
    )
  }
}

export default OrderList;
