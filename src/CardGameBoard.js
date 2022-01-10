import React from 'react';
import { createNewDeckPlayerA, createNewDeckPlayerB } from './api';
import { CardLayout } from './LayoutComponents';
import compareValues from './utils';

class CardGameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardImageUrl: null,
      cardValue: null,
      deckId: null,
      startGameButton: true, // start button
      flipGameButton: false,  // flip button set to false, so it doesn't change
      
      PlayerBCardImageUrl: null,
      PlayerBCardValue: null,
      PlayerBDeckId: null,

      // score state
      playerAScore: 0,
      playerBScore: 0,
      rounds: 5,
    };

    this.startGame = this.startGame.bind(this);
    this.flipGame = this.flipGame.bind(this);
  }

  componentDidMount = () => {
    this.flipGame();
  }

  startGame() {
    this.setState(state => ({
      startGameButton: !state.startGameButton
    }))
  }

  async flipGame() {
    const { deckId, value, image } = await createNewDeckPlayerA();
    const { PlayerBDeckId, PlayerBCardValue, PlayerBCardImageUrl } = await createNewDeckPlayerB();
    this.setState({...this.state,
      deckId,
      cardValue: value,
      cardImageUrl: image,
      PlayerBDeckId,
      PlayerBCardValue,
      PlayerBCardImageUrl,
    });

    const result = compareValues({
      value,
      PlayerBCardValue,
    });

    let playerARoundScore = this.state.playerAScore; 
    let playerBRoundScore = this.state.playerBScore;
    
    if (result > 0 ) {
      playerARoundScore += 1;
    } else if ( result < 0 ) {
      playerBRoundScore += 1;
    } else {}

    // modify the state, the result and cardValue and image
    // copying all the states, modify the other values
    this.setState({...this.state, playerAScore: playerARoundScore, 
      playerBScore: playerBRoundScore,
    });

  }

  render () {
    if (this.state.startGameButton) {
      return (
        <div>
          <button onClick={this.startGame}>Start Game</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.flipGame}>Flip</button>
          <CardLayout>
            <img src={this.state.cardImageUrl} alt='Card Image' />
          </CardLayout>
          <CardLayout>
            <img src={this.state.PlayerBCardImageUrl} alt='Player B Card Image' />
          </CardLayout>
          <div>Player A's Score: {this.state.playerAScore} </div>
          <div>Player B's Score: {this.state.playerBScore}</div>
        </div>   
      )
    }
  }  
}

export default CardGameBoard;