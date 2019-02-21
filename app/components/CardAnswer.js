import React from "react";
import { Card } from "./base/Card";
import { StrongText, LigthText } from "./base/Text";
import { HorizontalLine } from "./base/HorizontalLine";
import { Container } from "./base/Container";
import CardHeader from "./CardHeader";

const CardAnswer = ({ deck, questionIndex }) => {
  const { answer, question } = deck.questions[questionIndex];

  return (
    <Card padding={35}>
      <CardHeader center deck={deck} questionIndex={questionIndex + 1} />

      <HorizontalLine />

      <Container center>
        <LigthText center size={18}>
          {question}
        </LigthText>
        <StrongText center size={30}>
          {answer}
        </StrongText>
      </Container>
    </Card>
  );
};

export default CardAnswer;
