import React from "react";
import { MainContainer } from "./base/MainContainer";
import CardQuestion from "./CardQuestion";
import Button from "./base/Button";

const QuizQuestion = ({ deck, questionIndex, onShowAnswer }) => {
  return (
    <MainContainer>
      <CardQuestion deck={deck} questionIndex={questionIndex} />

      <Button primary onPress={() => onShowAnswer()}>
        Answer
      </Button>
    </MainContainer>
  );
};

export default QuizQuestion;
