import {loadStdlib, ask} from "@reach-sh/stdlib";
import * as backend from './build/index.main.mjs';
const stdlib =loadStdlib();
//const isAlice= ask.ask ? 'Ask'

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const fmt = (x) => stdlib.formatCurrency(x,4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

//const HAND = [1,2,3,4,5]
const OUTCOME = ['Bob wins', 'Draw', 'Alice wins']
const Player = (Who) => ({
    ...stdlib.hasRandom,
    raiseHand: () => {
        const hand = Math.floor(Math.random() * 5);
        console.log(`${Who} raised ${hand} fingers`);
        return hand;
    },
    sayNumber: (hand) =>{
        const number = parseInt(hand) + parseInt(Math.floor(Math.random()*5));
        console.log(`${Who} guessed ${number} total fingers`);
        return number;
    },
    seeOutcome: (outcome) => {
        console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
    },
    informTimeout: ()=> {
        console.log(`${Who} observed a timeout`);
    },
})

await Promise.all([
    ctcAlice.p.Alice({
        ...Player('Alice'),
        setWager: (amt)=>{
            
            console.log(`Alice is seting the wager to ${amt}.`);
            return stdlib.parseCurrency(5);
        },
        deadline: 10,
    }),
    ctcBob.p.Bob({
        ...Player('Bob'),
        acceptWager: (x) => {
            console.log(`Bob accepts ${fmt(x)}`)
        },
        getHand: async () => {
            const hand = Math.floor(Math.random() * 3);
            console.log(`${Who} played ${HAND[hand]}`);
            if (Math.random()<=0.01){
                for(let i=0;i<10;i++){
                    console.log(`${Who} takes their time senging it back`);
                    await stdlib.wait(1);
                }
            }
            return hand;
        },
    }),
]);
