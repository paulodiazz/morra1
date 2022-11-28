import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playHand(0)}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(2)}
        >2</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(3)}
        >3</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(4)}
        >4</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand(5)}
        >5</button>
      </div>
    );
  }
}

exports.WaitingForCommit = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for commit...
        <br />
        <img src={require("../images/neuron.gif")} width="200px" heigth="auto"/>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
        <br />
        <img src={require("../images/neuron.gif")} width="200px" heigth="auto"/>
      </div>
    );
  }
}

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, hand, playable, prevHand} = this.props;
    return (
      <div>
        {prevHand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGuess(parseInt(hand) + 0)}
        >{parseInt(hand) + 0}</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess(parseInt(hand) + 1)}
        >{parseInt(hand) + 1}</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess(parseInt(hand) + 2)}
        >{parseInt(hand) + 2}</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess(parseInt(hand) + 3)}
        >{parseInt(hand) + 3}</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess(parseInt(hand) + 4)}
        >{parseInt(hand) + 4}</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess(parseInt(hand) + 5)}
        >{parseInt(hand) + 5}</button>
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;