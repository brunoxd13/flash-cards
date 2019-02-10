import React, { Component } from "react";

import { Card, CardItem, Text, Body } from "native-base";

class SimpleCard extends Component {
  render() {
    return (
      <Card style={{ borderRadius: 8 }}>
        <CardItem
          bordered
          button
          onPress={() => alert("This is Card click!")}
          style={{ borderRadius: 8 }}
        >
          <Body>
            <Text>React</Text>
            <Text note>5 questions</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default SimpleCard;
