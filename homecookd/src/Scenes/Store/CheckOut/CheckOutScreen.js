import React, { Component } from 'react';
import { Button, Modal, Header, Image, Item } from 'semantic-ui-react';
import CheckOut from './CheckOut';
import CheckOutItem from './CheckOutItem';
import { connect } from 'react-redux';
import { createOrder } from '../../../Utils/storeData';
import history from '../../../Utils/history'

class CheckOutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_api_token: ''
    };

    this.getUserApiToken = this.getUserApiToken.bind(this);
    this.checkOut = this.checkOut.bind(this);
  }
  getUserApiToken() {
    if(localStorage.getItem('api_token') !== null) {
      return localStorage.getItem('api_token');
    } else {
      // redirect to login page
      history.push('/Auth/Login');
    }
  }

  checkOut() {
    let user_api_token = this.getUserApiToken();
    let seller_id = this.props.seller_id;
    let foodItems = this.props.cart.cart;
    createOrder(user_api_token, seller_id, foodItems);
  }

  state = { open: false }
  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })


  render() {

    return (
      <Modal open={this.props.open} >
        <Modal.Content scrolling>
          <Item.Group relaxed divided unstackable>
            {
              this.props.cart.cart.map(order =>
                <CheckOutItem key={order} orderId={order} />
              )
            }
          </Item.Group>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.props.handleClose} negative>
            Exit
          </Button>
          <Button onClick={this.checkOut} positive icon='checkmark' labelPosition='right' content='Check Out' />
        </Modal.Actions>
      </Modal>
    )
  }
}


const mapStateToProps = (reduxState) => {
  return{
    cart: reduxState.cart
  }
}

export default connect(mapStateToProps)(CheckOutScreen);
