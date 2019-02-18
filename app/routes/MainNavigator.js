import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "../screens/Home";
import AddDeck from "../screens/AddDeck";

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  NewDeck: {
    screen: AddDeck
  }
});

export default createAppContainer(MainNavigator);
