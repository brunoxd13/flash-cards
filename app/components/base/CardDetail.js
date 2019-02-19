import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "./Card";
import { StrongText, LigthText } from "./Text";
import { HorizontalLine } from "./HorizontalLine";

const CardDetail = ({ deck }) => {
  return (
    <Card padding={35}>
      <View style={styles.header}>
        <StrongText>{deck.title}</StrongText>
        <LigthText>{deck.questions.length} questions</LigthText>
      </View>

      <HorizontalLine />

      <View style={styles.header}>
        <StrongText>History</StrongText>
      </View>

      <View style={styles.history}>
        <Text>Bruno</Text>
        <Text>75%</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center"
  },
  history: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default CardDetail;
