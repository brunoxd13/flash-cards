import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "../screens/Home";
import AddDeck from "../screens/AddDeck";
import DeckDetails from "../screens/DeckDetails";

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  NewDeck: {
    screen: AddDeck
  },
  DeckDetails: {
    screen: DeckDetails
  }
});

export default createAppContainer(MainNavigator);
