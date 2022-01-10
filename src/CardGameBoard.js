import React from 'react';
import { createNewDeck } from './api';
import { CardLayout } from './LayoutComponents';

class CardGameBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardImageUrl: null,
      cardValue: null,
      deckId: null,
      startGameButton: true, // start button
      flipGameButton: false,  // flip button set to false, so it doesn't change
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
    const { deckId, value, image } = await createNewDeck();
    this.setState({
      deckId,
      cardValue: value,
      cardImageUrl: image,
    });
    console.log(deckId, value, image);
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
        </div>   
      )
    }
  }  
}

export default CardGameBoard;