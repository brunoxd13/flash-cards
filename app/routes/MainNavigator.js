import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "../screens/Home";
import AddDeck from "../screens/AddDeck";
import DeckDetails from "../screens/DeckDetails";

const navigateDefault = {
  headerTintColor: "#FFFFFF",
  headerStyle: {
    backgroundColor: "#5EC9F7"
  }
};

const MainNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { ...navigateDefault, headerTitle: "Flash Cards" }
  },
  NewDeck: {
    screen: AddDeck,
    navigationOptions: { ...navigateDefault, headerTitle: "New Deck" }
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: { ...navigateDefault, headerTitle: "Deck Dtails" }
  }
});

export default createAppContainer(MainNavigator);
