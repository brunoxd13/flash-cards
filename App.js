import React from "react";
import { StyleSheet } from "react-native";
import { Container } from "native-base";
import HeaderBar from "./components/HeaderBar";
import SimpleCardContainer from "./components/SimpleCardContainer";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <HeaderBar />
        <SimpleCardContainer />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
