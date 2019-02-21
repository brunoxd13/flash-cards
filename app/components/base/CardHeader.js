import React from "react";
import { StrongText, LigthText } from "./Text";
import { Container } from "./Container";

const CardHeader = ({ deck, questionIndex, ...props }) => (
  <Container {...props}>
    <StrongText>{deck.title}</StrongText>
    <LigthText>
      {questionIndex && `${questionIndex} - `}
      {deck.questions.length} questions
    </LigthText>
  </Container>
);

export default CardHeader;
