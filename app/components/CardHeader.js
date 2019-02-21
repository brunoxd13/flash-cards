import React from "react";
import { StrongText, LigthText } from "./base/Text";
import { Container } from "./base/Container";

const CardHeader = ({ deck, questionIndex, ...props }) => (
  <Container {...props}>
    <StrongText>{deck.title}</StrongText>
    <LigthText>
      {questionIndex && `${questionIndex} - `}
      {deck.questions ? deck.questions.length : 0} questions
    </LigthText>
  </Container>
);

export default CardHeader;
