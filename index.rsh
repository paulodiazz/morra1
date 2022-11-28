'reach 0.1';
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);
//winner logic
const winner = (handA,handB,numberA,numberB) => {
    if(numberA == numberB){
        const matchOutcome = DRAW;
        return matchOutcome;
    }
    else if ((handA+handB)==numberA){
        const matchOutcome = A_WINS;
        return matchOutcome;
    }
    else if ((handA+handB)==numberB){
        const matchOutcome = B_WINS;
        return matchOutcome;
    }
    else{
        const matchOutcome = DRAW;
        return matchOutcome;
    }
} 
//Verifying a draw when both participants say same number
forall(UInt, handA =>
    forall(UInt, handB=>
        forall(UInt, number=>
            assert(winner(handA,handB,number,number)==DRAW))));


//Verifying for all cases
forall(UInt, handA =>
    forall(UInt, handB =>
      forall(UInt, numberA =>
        forall(UInt, numberB =>
            assert(isOutcome(winner(handA, handB, numberA,  numberB)))))));

const Player = {
    raiseHand: Fun([], UInt), // Get hand numbers
    sayNumber: Fun([UInt],UInt), // Guess number
    seeOutcome: Fun([UInt],Null), 
    informTimeout: Fun([], Null),
    ...hasRandom
}

export const main = Reach.App(()=>{
    const Alice = Participant('Alice',{
        ...Player,
        wager: UInt,
        deadline: UInt,
    })
    const Bob = Participant('Bob',{
        ...Player,
        acceptWager: Fun([UInt], Null)
    })
    init()
    const informTimeout = () => {
        each([Alice,Bob], ()=>{
            interact.informTimeout();
        })
    };

    Alice.only(()=>{
        const wager = declassify(interact.wager) // wager
        const deadline = declassify(interact.deadline) // timeout
    })
    Alice.publish(wager,deadline)
        .pay(wager)
    commit();
    
    Bob.only(()=>{
        interact.acceptWager(wager)
    })
    Bob.pay(wager)
        .timeout(relativeTime(deadline), () =>  closeTo(Alice,informTimeout))
    
    // var [outcome, firstTime] = [DRAW, true];
    var [outcome] = [DRAW];
    invariant(balance()== 2*wager && isOutcome(outcome));
    while(outcome==DRAW){
        commit();
        // if(!firstTime){
        //     each ([Alice, Bob], () => {
        //         interact.seeOutcome(outcome);
        //     })
        // }
        Alice.only(()=>{
            const _handAlice = interact.raiseHand()
            const _numberAlice = interact.sayNumber(declassify(_handAlice))
            const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
            const [_commitAlice2, _saltAlice2] = makeCommitment(interact, _numberAlice);
            const commitAlice = declassify(_commitAlice);
            const commitAlice2 = declassify(_commitAlice2);
        })
        Alice.publish(commitAlice,commitAlice2)
            .timeout(relativeTime(deadline), () => closeTo(Bob,informTimeout));
        commit();
        unknowable(Bob, Alice(_handAlice,_saltAlice,_numberAlice,_saltAlice2));
        Bob.only(()=>{
            const handBob = declassify(interact.raiseHand())
            const numberBob =declassify(interact.sayNumber(handBob))
         })
        Bob.publish(handBob,numberBob)
            .timeout(relativeTime(deadline), () =>  closeTo(Alice,informTimeout));
        commit();
   

        Alice.only(()=>{
            const saltAlice = declassify(_saltAlice)
            const handAlice = declassify(_handAlice)
            const saltAlice2 = declassify(_saltAlice2)
            const numberAlice = declassify(_numberAlice);
        })
    
        Alice.publish(saltAlice, handAlice, saltAlice2, numberAlice)
            .timeout(relativeTime(deadline), ()=> closeTo(Bob, informTimeout));
        checkCommitment(commitAlice, saltAlice, handAlice);
        checkCommitment(commitAlice2, saltAlice2, numberAlice);
   
        // [outcome, firstTime] = [winner(handAlice,handBob,numberAlice,numberBob),false];
        [outcome] = [winner(handAlice,handBob,numberAlice,numberBob)];
        continue;
        }
    
    //const outcome = winner(handAlice,handBob,numberAlice,numberBob);
    
    
    assert(outcome == A_WINS || outcome == B_WINS);
    transfer(2*wager).to(outcome == A_WINS ? Alice : Bob);
    commit();
    each ([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });

})