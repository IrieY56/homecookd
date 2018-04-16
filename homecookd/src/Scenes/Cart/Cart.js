import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class Cart extends Component {


  render(){
    return(
      <div>
        {
          Object.values(this.props.cart)[0].map(cart =>
            <CartItem key={cart.order} orderId={cart.order} />
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return{
    cart: reduxState.cart
  }
}

export default connect(mapStateToProps)(Cart);
