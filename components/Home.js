import React from "react";
import { Container } from "native-base";
import SimpleCardContainer from "./SimpleCardContainer";
import { Button } from "react-native";

export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: "Flash Cards",
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="+"
        color="#87CEFA"
      />
    )
  };

  render() {
    return (
      <Container>
        <SimpleCardContainer />
      </Container>
    );
  }
}
