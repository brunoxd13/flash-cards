import React, { Component } from "react";
import { View, Button, ScrollView } from "react-native";
import SimpleCardContainer from "../components/SimpleCardContainer";

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
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
          <SimpleCardContainer />
        </ScrollView>
      </View>
    );
  }
}
