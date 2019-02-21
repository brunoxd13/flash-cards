import React from "react";
import { Card } from "./base/Card";
import { StrongText } from "./base/Text";
import { HorizontalLine } from "./base/HorizontalLine";
import { Container } from "./base/Container";
import CardHeader from "./CardHeader";

const CardQuestion = ({ deck, questionIndex }) => {
  const { question } = deck.questions[questionIndex];

  return (
    <Card padding={35}>
      <CardHeader center deck={deck} questionIndex={questionIndex + 1} />

      <HorizontalLine />

      <Container center>
        <StrongText center size={30}>
          {question}
        </StrongText>
      </Container>
    </Card>
  );
};

export default CardQuestion;
