import React from "react";
import { CardClickable } from "./Card";
import CardHeader from "./CardHeader";
import { withNavigation } from "react-navigation";

const SimpleCard = ({ navigation, deck }) => (
  <CardClickable
    onPress={() =>
      navigation.navigate("DeckDetails", { deckTitle: deck.title })
    }
  >
    <CardHeader deck={deck} />
  </CardClickable>
);

export default withNavigation(SimpleCard);
