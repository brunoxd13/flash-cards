import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextInput from "../components/base/TextInput";
import Button from "../components/base/Button";
import { handleAddDeck } from "../store/actions/decks";
class AddDeck extends Component {
  static navigationOptions = {
    headerTitle: "New Deck",
    headerTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: "#5EC9F7"
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      deckName: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  onAddDeck = () => {
    const { deckName } = this.state;
    const deck = { title: deckName, questions: [] };
    this.props.handleAddDeck(deck);
  };

  render() {
    return (
      <ScrollView style={{ padding: 3, backgroundColor: "#E5E5E5" }}>
        <TextInput
          id="deckName"
          title="Deck Name"
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
  bindActionCreators({ handleAddDeck }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(AddDeck);
