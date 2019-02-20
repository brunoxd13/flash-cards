import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextInput from "../components/base/TextInput";
import Button from "../components/base/Button";
import { handleAddQuestion } from "../store/actions/decks";

class Quiz extends Component {
  constructor(props) {
    super(props);
  }

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

function mapStateToProps({ decks }, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckTitle]
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleAddQuestion }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Quiz);
