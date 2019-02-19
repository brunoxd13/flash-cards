import React from "react";
import { CardClickable } from "./Card";
import { StrongText, LigthText } from "./Text";
import { withNavigation } from "react-navigation";

const SimpleCard = ({ navigation, deck }) => (
  <CardClickable
    onPress={() => navigation.navigate("DeckDetails", { deck: deck })}
  >
    <StrongText>{deck.title}</StrongText>
    <LigthText>{deck.questions.length} questions</LigthText>
  </CardClickable>
);

export default withNavigation(SimpleCard);
