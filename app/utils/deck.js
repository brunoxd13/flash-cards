export const addQuestionToDeck = (deck, question) => {
  return {
    [deck.title]: {
      ...deck,
      questions: [...deck.questions, question]
    }
  };
};

export const formatDeck = deck => {
  return {
    [deck.title]: {
      ...deck
    }
  };
};
