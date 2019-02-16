import { RECIVE_DECKS } from "../actions/decks";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };

    default:
      return state;
  }
}
