import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withNavigation } from "react-navigation";
import { MainContainer } from "./base/MainContainer";
import { StrongText, LigthText } from "./base/Text";
import { Card } from "./base/Card";
import { Container } from "./base/Container";
import Button from "./base/Button";
import { clearLocalNotifications } from "../utils/Notification";
import { handleAddHistory } from "../store/actions/decks";

const QuizResult = ({
  navigation,
  deck,
  result,
  onRestartQuiz,
  handleAddHistory
}) => {
  const onFinishQuiz = () => {
    clearLocalNotifications();

    const history = {
      date: Date.now(),
      result: result
    };

    handleAddHistory(deck, history);
  };

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
          onPress={async () => {
            await onFinishQuiz();
            onRestartQuiz();
            navigation.navigate("Quiz", { deckTitle: deck.title });
          }}
        >
          Restart Quiz
        </Button>

        <Button
          primary
          style={{ flex: 1 }}
          onPress={async () => {
            await onFinishQuiz();
            navigation.navigate("DeckDetails", { deckTitle: deck.title });
          }}
        >
          Back to Deck
        </Button>
      </View>
    </MainContainer>
  );
};

function mapStateToProps({ decks }, { deckTitle }) {
  return {
    deck: decks[deckTitle]
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleAddHistory }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(QuizResult));
