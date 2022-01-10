import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck/'
});

// create a new deck and shuffle
const createNewDeckPlayerA = async () => {
  const { data } = await api.get(`new/shuffle`, {
    params: {
      deck_count: 1
    }
  });

  const { deck_id: deckId } = data;

  // draw a card from the deck for Player 1
  const { data: cardResponse } = await api.get(`${deckId}/draw/`, {
    params: {
      count: 1
    }
  });
  
  return {...cardResponse.cards[0], deckId }
}

// create a new deck and shuffle
const createNewDeckPlayerB = async () => {
  const { data } = await api.get(`new/shuffle`, {
    params: {
      deck_count: 1
    }
  });

  const { deck_id: PlayerBDeckId } = data;  

  // draw a card from the deck for Player 1
  const { data: PlayerBCardResponse } = await api.get(`${PlayerBDeckId}/draw/`, {
    params: {
      count: 1
    }
  });
  console.log(PlayerBCardResponse.cards);
  const { image: PlayerBCardImageUrl, value: PlayerBCardValue  } = PlayerBCardResponse.cards[0];
  return { PlayerBCardImageUrl, PlayerBCardValue }

  // console.log(PlayerBCardValue, PlayerBCardImageUrl);
}

// const drawCardFromDeck = async (deckId) => {
//   const { data: cardResponse } = await api.get(`${deckId}/draw/`, {
//     params: {
//       count: 1
//     }
//   });

//   consr { cards } = data;
  
// }

export { createNewDeckPlayerA, createNewDeckPlayerB }

