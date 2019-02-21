import React, { Component } from "react";
import { MainContainer } from "../components/base/MainContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextInput from "../components/base/TextInput";
import Button from "../components/base/Button";
import { handleAddQuestion } from "../store/actions/decks";
import { Card } from "../components/base/Card";

class AddQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      answer: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  onAddQuestion = () => {
    const { deck } = this.props;

    const question = {
      question: this.state.question.trim(),
      answer: this.state.answer.trim()
    };

    if (question.question && question.answer) {
      this.props.handleAddQuestion(deck, question);
      this.props.navigation.navigate("DeckDetails", { deckTitle: deck.title });
    }
  };

  render() {
    return (
      <MainContainer>
        <Card>
          <TextInput
            id="question"
            title="Question"
            onHandleChange={this.handleFieldChange}
          />

          <TextInput
            id="answer"
            title="Answer"
            onHandleChange={this.handleFieldChange}
          />
        </Card>

        <Button primary onPress={this.onAddQuestion}>
          Add Question
        </Button>
      </MainContainer>
    );
  }
}

function mapStateToProps({ decks }, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckTitle]
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleAddQuestion }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddQuestion);
