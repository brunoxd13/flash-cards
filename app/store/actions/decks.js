import * as Api from "../../api/decks";

export const RECIVE_DECKS = "RECIVE_DECKS";
export const ADD_DECK = "ADD_DECK";

export const reciveDecks = decks => {
  return {
    type: RECIVE_DECKS,
    decks
  };
};

export const handleFetchDecks = () => {
  return dispatch => {
    return Api.fetchDecks().then(decks => dispatch(reciveDecks(decks)));
  };
};

export const addDeck = deck => {
  return {
    type: ADD_DECK,
    deck
  };
};

export const handleAddDeck = deck => {
  return async dispatch => {
    //TODO: fazer utils para converter
    const deckToSave = {
      [deck.title]: {
        ...deck
      }
    };

    return await Api.addDeck(deckToSave).then(deck => dispatch(addDeck(deck)));
  };
};
