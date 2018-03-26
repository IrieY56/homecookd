import React, { Component } from 'react';
import axios from 'axios';
import './OrderList.css';

const url = 'http://localhost:3001/api';
const api_token = localStorage.getItem('api_token');
var sellerOrders = ['order1', 'order2', 'order3'];

function getOrders(api_token){
  return axios.post(url + "/auth/information/seller", {
    api_token
  })
  .then(function(response) {
    console.log(response.data.reviews);
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
        <ul>
          {
            this.state.orders.map((order, i) => <li key={i}>{order}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default OrderList;
