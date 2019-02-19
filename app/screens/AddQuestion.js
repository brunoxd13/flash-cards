import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextInput from "../components/base/TextInput";
import Button from "../components/base/Button";
import { handleAddQuestion } from "../store/actions/decks";

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

  onAddDeck = () => {
    const { deck } = this.props.navigation.state.params;

    const question = {
      question: this.state.question,
      answer: this.state.question
    };

    this.props.handleAddQuestion(deck, question);
    this.props.navigation.navigate("DeckDetails", { deckTitle: deck.title });
  };

  render() {
    return (
      <ScrollView style={{ padding: 3, backgroundColor: "#E5E5E5" }}>
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

        <Button primary onPress={this.onAddDeck}>
          Add Deck
        </Button>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleAddQuestion }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(AddQuestion);