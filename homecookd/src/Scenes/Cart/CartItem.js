import React, { Component } from 'react';
import { getFoodItem } from '../../Utils/storeData';
import { Card, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

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
      <Card>
        <Card.Content >
          <Image size='small' floated='right' src={this.state.image}/>
          <Card.Header>{this.state.name}</Card.Header>
          <Card.Meta>{this.state.price}</Card.Meta>
          <Button color='black' size='mini'>Delete</Button>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(CartItem);
