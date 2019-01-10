import React, { Component } from "react";

import { Card, CardItem, Text, Body } from "native-base";

class SimpleCard extends Component {
  render() {
    return (
      <Card>
        <CardItem button onPress={() => alert("This is Card click!")}>
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
