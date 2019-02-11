import React from "react";
import {
  Button,
  Text,
  Form,
  Item,
  Input,
  Label,
  Content,
  Container
} from "native-base";

export default class AddDeck extends React.Component {
  static navigationOptions = {
    headerTitle: "New Deck",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#5EC9F7"
    }
  };

  render() {
    return (
      <Container>
        <Form>
          <Item stackedLabel>
            <Label>Deck Name</Label>
            <Input />
          </Item>
        </Form>

        <Content padder>
          <Button block style={{ backgroundColor: "#5EC9F7" }}>
            <Text>AddDeck</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
