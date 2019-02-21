import React from "react";
import { View } from "react-native";
import { MainContainer } from "./base/MainContainer";
import CardAnswer from "./CardAnswer";
import Button from "./base/Button";

const QuizAnswer = ({ deck, questionIndex, onAnswer }) => {
  return (
    <MainContainer>
      <CardAnswer deck={deck} questionIndex={questionIndex} />

      <View style={{ flex: 1, flexDirection: "row" }}>
        <Button style={{ flex: 1 }} onPress={() => onAnswer(false)}>
          Incorrect
        </Button>

        <Button primary style={{ flex: 1 }} onPress={() => onAnswer(true)}>
          Correct
        </Button>
      </View>
    </MainContainer>
  );
};

export default QuizAnswer;
