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

  console.log(playerACardValueIndex);
  console.log(playerBCardValueIndex);
  if(playerACardValueIndex > playerBCardValueIndex) {
    console.log('player a wins this round');
    return 1;
  } else if (playerACardValueIndex < playerBCardValueIndex) {
    console.log('player B wins this round');
    return -1;
  } else {
    console.log('tie');
    return 0;
  }
}

export default compareValues;
