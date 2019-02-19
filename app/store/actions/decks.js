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
    return Api.fetchDecks().then(decks => {
      console.log("decks", decks);
      dispatch(reciveDecks(decks));
    });
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
    //TODO: fazer utils para converter
    const deckToSave = {
      [deck.title]: {
        ...deck
      }
    };

    Api.addDeck(deckToSave);
    return dispatch(addDeck(deckToSave));
  };
};
