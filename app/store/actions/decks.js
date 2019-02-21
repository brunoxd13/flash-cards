import * as Api from "../../api/decks";
import { formatDeck } from "../../utils/deck";

export const RECIVE_DECKS = "RECIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_HISTORY = "ADD_HISTORY";

export const reciveDecks = decks => {
  return {
    type: RECIVE_DECKS,
    decks
  };
};

export const handleFetchDecks = () => {
  return dispatch => {
    return Api.getDecks().then(decks => dispatch(reciveDecks(decks)));
  };
};

export const addDeck = deck => {
  return {
    type: ADD_DECK,
    deck
  };
};

export const handleAddDeck = deck => {
  return dispatch => {
    const deckToSave = formatDeck(deck);

    Api.addOrUpdateDeck(deckToSave);
    return dispatch(addDeck(deckToSave));
  };
};

export const addQuestion = deck => {
  return {
    type: ADD_QUESTION,
    deck
  };
};

export const handleAddQuestion = (deck, question) => {
  return dispatch => {
    const deckToSave = Api.addQuestion(deck, question);
    return dispatch(addQuestion(deckToSave));
  };
};

export const addHistory = deck => {
  return {
    type: ADD_HISTORY,
    deck
  };
};

export const handleAddHistory = (deck, history) => {
  return dispatch => {
    const deckToSave = Api.addHistory(deck, history);
    return dispatch(addHistory(deckToSave));
  };
};
