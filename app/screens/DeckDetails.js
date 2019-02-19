import React from "react";
import { withNavigation } from "react-navigation";
import CardDetail from "../components/base/CardDetail";

const DeckDetails = ({ navigation }) => {
  const { deck } = navigation.getParam("deck");

  return <CardDetail deck={deck} />;
};

export default withNavigation(DeckDetails);
