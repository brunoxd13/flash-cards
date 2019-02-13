import React, { Component } from "react";
import { TextInput, View } from "react-native";
import { Card } from "./base/styled/Card";
import { LigthText } from "./base/styled/Text";

export default class AddDeck extends Component {
  static navigationOptions = {
    headerTitle: "New Deck",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#5EC9F7"
    }
  };

  render() {
    return (
      <View>
        <Card>
          <LigthText>Teste</LigthText>
          <TextInput
            style={{
              borderBottomColor: "#878787",
              borderBottomWidth: 1,
              marginTop: 3,
              fontSize: 19
            }}
          />
        </Card>
      </View>
    );
  }
}
