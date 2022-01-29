import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck/'
});

const createNewDeckPlayerA = async () => {
  const { data } = await api.get(`new/shuffle`, {
    params: {
      deck_count: 1
    }
  });

  const { deck_id: deckId } = data;

  const { data: cardResponse } = await api.get(`${deckId}/draw/`, {
    params: {
      count: 1
    }
  });
  
  return {...cardResponse.cards[0], deckId }
}

const createNewDeckPlayerB = async () => {
  const { data } = await api.get(`new/shuffle`, {
    params: {
      deck_count: 1
    }
  });

  const { deck_id: PlayerBDeckId } = data;  

  const { data: PlayerBCardResponse } = await api.get(`${PlayerBDeckId}/draw/`, {
    params: {
      count: 1
    }
  });
  
  const { image: PlayerBCardImageUrl, value: PlayerBCardValue  } = PlayerBCardResponse.cards[0];
  return { PlayerBCardImageUrl, PlayerBCardValue }

}

export { createNewDeckPlayerA, createNewDeckPlayerB }

