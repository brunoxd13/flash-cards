import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./Home";
import AddDeck from "./AddDeck";

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  NewDeck: {
    screen: AddDeck
  }
});

export default createAppContainer(MainNavigator);
