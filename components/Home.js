import React, { Component } from "react";
import { View, Button, ScrollView } from "react-native";
import SimpleCardContainer from "./SimpleCardContainer";
import CardDetail from "./base/CardDetail";
import AddDeck from "./AddDeck";

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
      <View style={{ flex: 1, padding: 3, backgroundColor: "#E5E5E5" }}>
        <ScrollView>
          <AddDeck />
          {/* <SimpleCardContainer /> */}
          {/* <CardDetail /> */}
        </ScrollView>
      </View>
    );
  }
}
