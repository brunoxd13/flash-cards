import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HorizontalLine from "./HorizontalLine";

export default class CardDetail extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.strong}>Title</Text>
          <Text style={styles.ligth}>5 Questions</Text>
        </View>

        <HorizontalLine />
        <View style={styles.header}>
          <Text style={styles.strong}>History</Text>
        </View>

        <View style={styles.history}>
          <Text>Bruno</Text>
          <Text>75%</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 35,
    color: "#222222"
  },
  header: {
    alignItems: "center"
  },
  strong: {
    fontWeight: "bold"
  },
  ligth: {
    color: "#878787"
  },
  history: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
