import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "./Card";
import { StrongText } from "./Text";
import { HorizontalLine } from "./HorizontalLine";
import { Container } from "./Container";
import CardHeader from "./CardHeader";

const CardDetail = ({ deck }) => {
  return (
    <Card padding={35}>
      <CardHeader center deck={deck} />

      <HorizontalLine />

      <Container center>
        <StrongText>History</StrongText>
      </Container>

      <View style={styles.history}>
        <Text>Bruno</Text>
        <Text>75%</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  history: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default CardDetail;
