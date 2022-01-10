const cardValues = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  ACE: 14,
}

const compareValues = ({ value, PlayerBCardValue }) => {
  const playerACardValueIndex = cardValues[value];
  const playerBCardValueIndex = cardValues[PlayerBCardValue];

  if(playerACardValueIndex > playerBCardValueIndex) {
    return 1;
  } else if (playerACardValueIndex < playerBCardValueIndex) {
    return -1;
  } else {
    return 0;
  }
}

export default compareValues;
