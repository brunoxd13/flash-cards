import { AsyncStorage } from "react-native";
import { addQuestionToDeck } from "../utils/deck";

const DECKS_STORAGE_KEY = "FlashCards:decks";

export const getDecks = () => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
};

export const addOrUpdateDeck = deck => {
  AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
};

//TODO: remove Deck

export const setDecks = decks => {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
};

export const resetDecks = () => {
  return AsyncStorage.removeItem(DECKS_STORAGE_KEY);
};

export const addQuestion = (deck, question) => {
  const deckToSave = addQuestionToDeck(deck, question);
  addOrUpdateDeck(deckToSave);
  return deckToSave;
};
