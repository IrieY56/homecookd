import React, { Component } from 'react';
import { getFoodItem } from '../../Utils/storeData';

class CartItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: '',
      name: '',
      price: '',
      image: ''
    }
  }

  componentDidMount() {
    getFoodItem(this.props.orderId)
      .then(res => {
        var data = res.data.data;
        this.setState({
          id: data._id,
          name: data.name,
          price: data.price,
          image: data.image
        })
      })
  }

  render() {
    return (
      <div>{this.props.orderId}</div>
    )
  }
}

export default CartItem;
