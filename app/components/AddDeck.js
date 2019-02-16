import React, { Component } from "react";
import { View } from "react-native";
import TextInput from "./base/TextInput";
import Button from "./base/Button";

export default class AddDeck extends Component {
  static navigationOptions = {
    headerTitle: "New Deck",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#5EC9F7"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      deckName: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  render() {
    return (
      <View>
        <TextInput
          id="deckName"
          title="Deck Name"
          onHandleChange={this.handleFieldChange}
        />

        <Button primary onPress={() => {}}>
          Add Deck
        </Button>
      </View>
    );
  }
}
