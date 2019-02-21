import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SimpleCard from "./base/SimpleCard";
import { handleFetchDecks } from "../store/actions/decks";
import { Container } from "./base/Container";
import { StrongText, LigthText } from "./base/Text";

class SimpleCardContainer extends Component {
  componentDidMount() {
    this.props.handleFetchDecks();
  }

  render() {
    if (!this.props.decks) {
      return (
        <Container center>
          <StrongText>No decks yet :(</StrongText>
          <LigthText>Go ahead and add now!</LigthText>
        </Container>
      );
    }

    return Object.values(this.props.decks).map(deck => (
      <SimpleCard key={deck.title} deck={deck} />
    ));
  }
}

function mapStateToProps({ decks }) {
  return {
    decks: decks
  };
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ handleFetchDecks }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleCardContainer);
