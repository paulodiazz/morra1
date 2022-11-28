// frontend imports
import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
// backend import
import * as backend from './build/index.main.mjs';
// stdlib and reach
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);
// default constants

const OUTCOME = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '0.01', standardUnit};

// algo wallet
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
    providerEnv: 'TestNet', MyAlgoConnect
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults}; // First view in frontend from App views
  }

  async componentDidMount() { // search for wallet
    const acc = await reach.getDefaultAccount(); // default wallet in browser Metamask if ETH
    console.log(acc);
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    if (await reach.canFundFromFaucet()) { // Access Reach faucet testnet?
      this.setState({view: 'FundAccount'}); // Go to FundAccount view in AppViews
    } else {
      this.setState({view: 'DeployerOrAttacher'}); // Go to DeployerOrAttacher view in AppViews
    }
  }
  
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }

  async skipFundAccount() {
    this.setState({view: 'DeployerOrAttacher'});
  }

  selectAttacher() {
    this.setState({view: 'Wrapper', ContentView: Attacher});
  }

  selectDeployer() {
    this.setState({view: 'Wrapper', ContentView: Deployer});
  }

  render() { // Render the appropriate view from AppViews
    return renderView(this, AppViews);
  }
}

class Player extends React.Component {
  random() {
    return reach.hasRandom.random();
  }

  informTimeout() {
    this.setState({view: 'Timeout'});
  }

  async raiseHand() {
    const hand = await new Promise(resolveHand => {
      this.setState({view: 'GetHand', playable: true, resolveHand});
    });
    this.setState({view: 'WaitingForCommit', hand});
    return hand;
  }

  playHand(hand) {
    this.state.resolveHand(hand);
  }
  
  async sayNumber(hand) {
    const number = await new Promise(resolveGuess => {
      this.setState({view: 'GetGuess', hand, playable: true, resolveGuess});
    });
    this.setState({view: 'WaitingForResults', number});
    return number;
  }

  playGuess(hand) {
    this.state.resolveGuess(hand);
  }

  seeOutcome(i) {
    this.setState({view: 'Done', outcome: OUTCOME[i]});
  }
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'SetWager'};
  }

  setWager(wager) {
    this.setState({view: 'Deploy', wager});
  }

  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }

  render() {
    return renderView(this, DeployerViews);
  }
}

class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Bob(ctc, this);
  }

  async acceptWager(wagerAtomic) { // Fun([UInt], Null)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return await new Promise(resolveAcceptedP => {
      this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
    });
  }

  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({view: 'WaitingForTurn'});
  }

  render() {
    return renderView(this, AttacherViews);
  }
}

renderDOM(<App />);