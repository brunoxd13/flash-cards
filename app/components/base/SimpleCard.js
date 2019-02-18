import React from "react";
import { CardClickable } from "./Card";
import { StrongText, LigthText } from "./Text";

const SimpleCard = ({ navigation, deck }) => (
  <CardClickable onPress={() => navigation.navigate("NewDeck")}>
    <StrongText>{deck.title}</StrongText>
    <LigthText>{deck.questions.length} questions</LigthText>
  </CardClickable>
);

export default SimpleCard;
