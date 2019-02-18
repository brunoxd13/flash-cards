import React, { Component } from "react";
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SimpleCard from "./base/SimpleCard";
import { handleFetchDecks } from "../store/actions/decks";

class SimpleCardContainer extends Component {
  componentDidMount() {
    this.props.handleFetchDecks();
  }

  render() {
    return (
      <ScrollView>
        {Object.values(this.props.decks).map(deck => (
          <SimpleCard key={deck.title} deck={deck} />
        ))}
      </ScrollView>
    );
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
