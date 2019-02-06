import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./Home";

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

export default createAppContainer(MainNavigator);
