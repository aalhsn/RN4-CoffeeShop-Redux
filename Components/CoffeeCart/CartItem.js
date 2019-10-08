import React, { Component } from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <ListItem style={{ borderBottomWidth: 0 }}>
        <Left>
          <Text style={{ color: "white", marginLeft: 16 }}> {item.drink} </Text>
          <Text note style={{ marginLeft: 16 }}>
            {item.option}
          </Text>
        </Left>
        <Body>
          <Text style={{ color: "white", marginLeft: 40 }}>
            {item.quantity}
          </Text>
        </Body>
        <Right>
          <Button>
            <Text style={{ fontSize: 10 }}>del</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default CartItem;
