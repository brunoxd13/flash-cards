import React from "react";
import { Container } from "native-base";
import SimpleCardContainer from "./SimpleCardContainer";
import { Button } from "react-native";
import AddCategory from "./AddCategory";

export default class Home extends React.Component {
  static navigationOptions = {
    headerTitle: "Flash Cards",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#5EC9F7"
    },
    headerRight: (
      <Button
        onPress={() => alert("This is a button!")}
        title="+"
        color="#FFFFFF"
      />
    )
  };

  render() {
    return (
      <Container>
        {/* <AddCategory /> */}
        <SimpleCardContainer />
      </Container>
    );
  }
}
