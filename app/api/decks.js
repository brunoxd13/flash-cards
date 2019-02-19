import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "FlashCards:decks";

export const fetchDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
};

export const addDeck = deck => {
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
};

//TODO: remove Deck

export const setDecks = decks => {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
};

export const resetDecks = () => {
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY);
};
