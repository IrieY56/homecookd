import React, { Component } from 'react';
import { Card, Button, Image } from 'semantic-ui-react'
import {getFoodItemsBySellerID} from '../../Utils/storeData.js';
import { connect } from 'react-redux';

const FoodItemGridStyle = {
  width: '570px',
  margin: '0 auto',
  height: 0
}

class FoodItemGrid extends Component{
  constructor(props) {
    super(props);
    this.state = {
      foodItems : []
    };

    this.addCart = this.addCart.bind(this);
  }

  addCart(id){
    alert(id);
  }

  componentDidMount(){
    getFoodItemsBySellerID(this.props.sellerID)
      .then(response => {
        const responseBody = response.data;
        this.setState({foodItems: responseBody.data});
      })
      .catch(error => {

        console.log(error);
      })
  }

  render(){
    const src = 'https://dishes.menu/assets/img/tmp/food_default.jpg';
    const style={margin:5}
    return(
      <div>
        <Card.Group style={FoodItemGridStyle} itemsPerRow={3}>
          {
          this.state.foodItems.map(foodItem =>
            <Card style={style} raised>
              <Card.Content>
                <Image src={src} />
                <Card.Description>{foodItem.name} </Card.Description>
              </Card.Content>
              <Card.Content>
                <div>
                  <Button onClick={() => this.addCart(foodItem._id)} size='mini' primary>Add to Cart</Button>
                </div>
              </Card.Content>
            </Card>
          )
        }
        </Card.Group>
      </div>
    )
  }
}

function mapDispatchToProps(){
  
}

export default connect(null, mapDispatchToProps)(FoodItemGrid);
