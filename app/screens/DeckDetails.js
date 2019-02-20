import React from "react";
import { View, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import CardDetail from "../components/base/CardDetail";
import Button from "../components/base/Button";

const DeckDetails = ({ navigation, deck }) => {
  return (
    <ScrollView style={{ padding: 3, backgroundColor: "#E5E5E5" }}>
      <CardDetail deck={deck} />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Button
          style={{ flex: 1 }}
          onPress={() =>
            navigation.navigate("AddQuestion", { deckTitle: deck.title })
          }
        >
          Add Question
        </Button>

        <Button
          primary
          style={{ flex: 1 }}
          onPress={() => navigation.navigate("Quiz", { deckTitle: deck.title })}
        >
          Start Quiz
        </Button>
      </View>
    </ScrollView>
  );
};

function mapStateToProps({ decks }, { navigation }) {
  return {
    deck: decks[navigation.state.params.deckTitle]
  };
}

export default connect(mapStateToProps)(withNavigation(DeckDetails));
