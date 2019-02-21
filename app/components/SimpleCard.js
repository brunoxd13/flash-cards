import React from "react";
import { withNavigation } from "react-navigation";
import { CardClickable } from "./base/Card";
import CardHeader from "./CardHeader";

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
