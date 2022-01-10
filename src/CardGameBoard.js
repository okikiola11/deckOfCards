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
      startGameButton: true,
      flipGameButton: false,
      
      PlayerBCardImageUrl: null,
      PlayerBCardValue: null,
      PlayerBDeckId: null,

      // score state
      playerAScore: 0,
      playerBScore: 0,
      rounds: 5,
      winner: null,
    };

    this.startGame = this.startGame.bind(this);
    this.flipGame = this.flipGame.bind(this);
    this.getWinner = this.getWinner.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount = async () => {
    this.flipGame();
  }

  startGame() {
    this.setState(state => ({
      startGameButton: !state.startGameButton
    }))
  }

  getWinner() {
    if (this.state.playerAScore > this.state.playerBScore) {
      return `Player A wins`;
    } else if (this.state.playerBScore > this.state.playerAScore) {
      return `Player b wins`;
    } else {
      return `It's a draw`;
    }
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

    let playerARoundScore = this.state.playerAScore, playerBRoundScore = this.state.playerBScore;
    let nextRounds = this.state.rounds - 1
    if (result > 0 ) {
      playerARoundScore += 1;
    } else if ( result < 0 ) {
      playerBRoundScore += 1;
    } else {}

    this.setState({...this.state, playerAScore: playerARoundScore, 
      playerBScore: playerBRoundScore,
      rounds: nextRounds
    });

  }

  reset() {
    this.setState({
      cardImageUrl: null,
      cardValue: null,
      deckId: null,
      startGameButton: true,
      flipGameButton: false,
      
      PlayerBCardImageUrl: null,
      PlayerBCardValue: null,
      PlayerBDeckId: null,

      playerAScore: 0,
      playerBScore: 0,
      rounds: 5,
      winner: null,
    })
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
          {(this.state.rounds > 0) && <button onClick={this.flipGame}>Flip</button>}
          {(this.state.rounds <= 0) && <div>{this.getWinner()} <button onClick={this.reset}>Play Again</button></div>}
          <CardLayout>
            <img src={this.state.cardImageUrl} alt='Player A Card Image' />
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
