import * as Api from "../../api/decks";

export const RECIVE_DECKS = "RECIVE_DECKS";

export function reciveDecks(decks) {
  return {
    type: RECIVE_DECKS,
    decks
  };
}

export const fetchDecks = () => {
  return dispatch => {
    return Api.fetchDecks().then(decks => dispatch(reciveDecks(decks)));
  };
};
