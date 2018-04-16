import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { Segment } from 'semantic-ui-react'

const cartStyle = {
  width: '90%',
  margin: '0 auto'
}

class Cart extends Component {
  render(){
    return(
      <Segment style={cartStyle}>
        {
          Object.values(this.props.cart)[0].map(cart =>
            <CartItem key={cart.order} orderId={cart.order} />
          )
        }
      </Segment>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return{
    cart: reduxState.cart
  }
}

export default connect(mapStateToProps)(Cart);
