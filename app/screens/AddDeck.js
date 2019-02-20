import React, { Component } from "react";
import { MainContainer } from "../components/base/MainContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TextInput from "../components/base/TextInput";
import Button from "../components/base/Button";
import { handleAddDeck } from "../store/actions/decks";
import { withNavigation } from "react-navigation";

class AddDeck extends Component {
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
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <MainContainer>
        <TextInput
          id="deckName"
          title="Deck Name"
          onHandleChange={this.handleFieldChange}
        />

        <Button primary onPress={this.onAddDeck}>
          Add Deck
        </Button>
      </MainContainer>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleAddDeck }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(withNavigation(AddDeck));
