import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "./Card";
import { StrongText, LigthText } from "./Text";
import { HorizontalLine } from "./HorizontalLine";

const CardQuestion = ({ deck }) => {
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

export default CardQuestion;