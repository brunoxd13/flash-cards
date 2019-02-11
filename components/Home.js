import React, { Component } from "react";
import { View, Button } from "react-native";
import SimpleCardContainer from "./SimpleCardContainer";
// import DeckDetail from "./DeckDetail";
import CardDetail from "./base/CardDetail";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: "Flash Cards",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#5EC9F7"
    },
    headerRight: (
      <Button
        onPress={() => navigation.navigate("NewDeck")}
        title="+"
        color="#FFFFFF"
      />
    )
  });

  render() {
    return (
      <View style={{ padding: 3, backgroundColor: "#E5E5E5" }}>
        <SimpleCardContainer />
        {/* <CardDetail /> */}
      </View>
    );
  }
}
