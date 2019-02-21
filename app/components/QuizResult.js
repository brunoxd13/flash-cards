import React from "react";
import { View } from "react-native";
import { withNavigation } from "react-navigation";
import { MainContainer } from "./base/MainContainer";
import { StrongText, LigthText } from "./base/Text";
import { Card } from "./base/Card";
import { Container } from "./base/Container";
import Button from "./base/Button";

const QuizResult = ({ navigation, deck, result, onRestartQuiz }) => {
  return (
    <MainContainer>
      <Card>
        <Container center>
          <LigthText size={20}>You achived</LigthText>
          <StrongText size={30}>{result}%</StrongText>
          <LigthText size={20}>of rigth answers!</LigthText>
        </Container>
      </Card>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <Button
          style={{ flex: 1 }}
          onPress={() => {
            onRestartQuiz();
            navigation.navigate("Quiz", { deckTitle: deck.title });
          }}
        >
          Restart Quiz
        </Button>

        <Button
          primary
          style={{ flex: 1 }}
          onPress={() =>
            navigation.navigate("DeckDetails", { deckTitle: deck.title })
          }
        >
          Back to Deck
        </Button>
      </View>
    </MainContainer>
  );
};

export default withNavigation(QuizResult);
