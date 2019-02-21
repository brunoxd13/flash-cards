import React from "react";
import styled from "styled-components/native";
import { Container } from "./base/Container";
import { StrongText, LigthText } from "./base/Text";
import { getDateFromTimestamp } from "../utils/date";

const HistoriyContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

const QuizHistory = ({ deck }) => {
  if (!deck.histories) {
    return (
      <Container center>
        <StrongText>No history yet :(</StrongText>
        <LigthText>Go ahead and play now!</LigthText>
      </Container>
    );
  }

  return (
    <Container>
      <Container center>
        <StrongText>History</StrongText>
      </Container>

      {Object.values(deck.histories).map(history => (
        <HistoriyContainer key={history.date}>
          <LigthText>{getDateFromTimestamp(history.date)}</LigthText>
          <LigthText>{history.result}%</LigthText>
        </HistoriyContainer>
      ))}
    </Container>
  );
};

export default QuizHistory;
