import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "../components/Home";
import AddDeck from "../components/AddDeck";

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  NewDeck: {
    screen: AddDeck
  }
});

export default createAppContainer(MainNavigator);
