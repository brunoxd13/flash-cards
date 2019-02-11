import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SimpleCard extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.strong}>Title</Text>
        <Text style={styles.ligth}>5 Questions</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    margin: 3,
    color: "#222222"
  },
  strong: {
    fontWeight: "bold"
  },
  ligth: {
    color: "#878787"
  }
});
