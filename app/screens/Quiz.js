import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import QuizQuestion from "../components/QuizQuestion";
import QuizAnswer from "../components/QuizAnswer";
import QuizResult from "../components/QuizResult";
import { handleAddQuestion } from "../store/actions/decks";
import { Text } from "react-native";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showResult: false,
      showAnswer: false,
      questionIndex: 0,
      countResult: 0
    };
  }

  onShowAnswer = () => {
    this.setState({ showAnswer: true });
  };

  onAnswer = result => {
    const countResult = result
      ? this.state.countResult + 1
      : this.state.countResult;

    this.setState(
      {
        questionIndex: this.state.questionIndex + 1,
        showAnswer: false,
        countResult: countResult
      },
      this.isFinalQuestion()
    );
  };

  isFinalQuestion = () => {
    const { deckLength } = this.props;

    if (this.state.questionIndex + 1 == deckLength) {
      this.setState({ showResult: true });
    }
  };

  getResult = () => {
    const { deckLength } = this.props;
    const { countResult } = this.state;
    return Number((countResult / deckLength) * 100).toFixed(0);
  };

  onRestartQuiz = () => {
    this.setState({
      showResult: false,
      showAnswer: false,
      questionIndex: 0,
      countResult: 0
    });
  };

  render() {
    const { deck, deckLength } = this.props;
    const { questionIndex, showAnswer, showResult } = this.state;

    if (!deckLength) {
      return <Text>Oh Noooo :(</Text>;
    }

    if (showResult) {
      return (
        <QuizResult
          deckTitle={deck.title}
          result={this.getResult()}
          onRestartQuiz={this.onRestartQuiz}
        />
      );
    }

    if (showAnswer) {
      return (
        <QuizAnswer
          deck={deck}
          questionIndex={questionIndex}
          onAnswer={this.onAnswer}
        />
      );
    } else {
      return (
        <QuizQuestion
          deck={deck}
          questionIndex={questionIndex}
          onShowAnswer={this.onShowAnswer}
        />
      );
    }
  }
}

function mapStateToProps({ decks }, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckTitle],
    deckLength: decks[navigation.state.params.deckTitle].questions.length
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleAddQuestion }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
