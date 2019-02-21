export const addQuestionToDeck = (deck, question) => {
  return {
    [deck.title]: {
      ...deck,
      questions: [...(deck.questions || []), question]
    }
  };
};

export const addHistoryToDeck = (deck, history) => {
  return {
    [deck.title]: {
      ...deck,
      histories: [...(deck.histories || []), history]
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

export const orderHistory = (histories, orderBy) => {
  if (orderBy === "newest") {
    return Object.values(histories).sort((history1, history2) => {
      return history2.timestamp - history1.timestamp;
    });
  } else if (orderBy === "oldest") {
    return Object.values(histories).sort((history1, history2) => {
      return history1.timestamp - history2.timestamp;
    });
  }
};
