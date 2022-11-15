// Automatically generated with Reach 0.1.12 (0b231964)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (0b231964)';
export const _backendVersion = 25;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc2, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc3, ctc3, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc3, ctc3, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  
  
  const v347 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  
  const v350 = stdlib.protect(ctc0, await interact.setWager(stdlib.checkedBigNumberify('./index.rsh:62:53:decimal', stdlib.UInt_max, '5')), {
    at: './index.rsh:62:52:application',
    fs: ['at ./index.rsh:61:15:application call to [unknown function] (defined at: ./index.rsh:61:18:function exp)'],
    msg: 'setWager',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v350, v347],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:65:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v350, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v352, v353], secs: v355, time: v354, didSend: v69, from: v351 } = txn1;
      
      sim_r.txns.push({
        amt: v352,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v364 = stdlib.safeAdd(v354, v353);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v352, v353], secs: v355, time: v354, didSend: v69, from: v351 } = txn1;
  ;
  const v364 = stdlib.safeAdd(v354, v353);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v364],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v351, v352, v353, v364],
      evt_cnt: 0,
      funcNum: 2,
      lct: v354,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v538, time: v537, didSend: v290, from: v536 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v351,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v538, time: v537, didSend: v290, from: v536 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:57:35:application',
      fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:30:function exp)', 'at ./index.rsh:73:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v370, time: v369, didSend: v78, from: v368 } = txn2;
    const v372 = stdlib.add(v352, v352);
    ;
    let v373 = true;
    let v374 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v375 = v369;
    let v382 = v372;
    
    let txn3 = txn2;
    while (await (async () => {
      const v390 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v390;})()) {
      const v398 = stdlib.safeAdd(v375, v353);
      if (v373) {
        }
      else {
        stdlib.protect(ctc1, await interact.seeOutcome(v374), {
          at: './index.rsh:81:36:application',
          fs: ['at ./index.rsh:80:18:application call to [unknown function] (defined at: ./index.rsh:80:36:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        }
      const v406 = stdlib.protect(ctc0, await interact.raiseHand(), {
        at: './index.rsh:85:50:application',
        fs: ['at ./index.rsh:84:19:application call to [unknown function] (defined at: ./index.rsh:84:22:function exp)'],
        msg: 'raiseHand',
        who: 'Alice'
        });
      const v407 = stdlib.protect(ctc0, await interact.sayNumber(v406), {
        at: './index.rsh:86:52:application',
        fs: ['at ./index.rsh:84:19:application call to [unknown function] (defined at: ./index.rsh:84:22:function exp)'],
        msg: 'sayNumber',
        who: 'Alice'
        });
      const v408 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:87:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:84:19:application call to [unknown function] (defined at: ./index.rsh:84:22:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v409 = stdlib.digest([ctc0, ctc0], [v408, v406]);
      const v411 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:88:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:84:19:application call to [unknown function] (defined at: ./index.rsh:84:22:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v412 = stdlib.digest([ctc0, ctc0], [v411, v407]);
      
      const txn4 = await (ctc.sendrecv({
        args: [v351, v352, v353, v368, v373, v382, v398, v409, v412],
        evt_cnt: 2,
        funcNum: 4,
        lct: v375,
        onlyIf: true,
        out_tys: [ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:92:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v415, v416], secs: v418, time: v417, didSend: v119, from: v414 } = txn4;
          
          ;
          const v426 = stdlib.safeAdd(v417, v353);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v398],
        tys: [ctc3, ctc0, ctc0, ctc3, ctc4, ctc0, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v351, v352, v353, v368, v373, v382, v398],
          evt_cnt: 0,
          funcNum: 5,
          lct: v375,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v504, time: v503, didSend: v243, from: v502 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v368,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v504, time: v503, didSend: v243, from: v502 } = txn5;
        ;
        const v505 = stdlib.addressEq(v351, v502);
        const v506 = stdlib.addressEq(v368, v502);
        const v507 = v505 ? true : v506;
        stdlib.assert(v507, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:93:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:57:35:application',
          fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:30:function exp)', 'at ./index.rsh:93:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v415, v416], secs: v418, time: v417, didSend: v119, from: v414 } = txn4;
        ;
        const v419 = stdlib.addressEq(v351, v414);
        stdlib.assert(v419, {
          at: './index.rsh:92:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v426 = stdlib.safeAdd(v417, v353);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v426],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v351, v352, v353, v368, v382, v415, v416, v426],
            evt_cnt: 0,
            funcNum: 7,
            lct: v417,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v486, time: v485, didSend: v209, from: v484 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v351,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v486, time: v485, didSend: v209, from: v484 } = txn6;
          ;
          const v487 = stdlib.addressEq(v351, v484);
          const v488 = stdlib.addressEq(v368, v484);
          const v489 = v487 ? true : v488;
          stdlib.assert(v489, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:101:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:57:35:application',
            fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:30:function exp)', 'at ./index.rsh:101:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v433, v434], secs: v436, time: v435, didSend: v131, from: v432 } = txn5;
          ;
          const v437 = stdlib.addressEq(v368, v432);
          stdlib.assert(v437, {
            at: './index.rsh:100:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v444 = stdlib.safeAdd(v435, v353);
          const txn6 = await (ctc.sendrecv({
            args: [v351, v352, v353, v368, v382, v415, v416, v433, v434, v444, v408, v406, v411, v407],
            evt_cnt: 4,
            funcNum: 8,
            lct: v435,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:112:15:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v449, v450, v451, v452], secs: v454, time: v453, didSend: v143, from: v448 } = txn6;
              
              ;
              let v460;
              const v461 = stdlib.eq(v452, v434);
              if (v461) {
                v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v462 = stdlib.safeAdd(v450, v433);
                const v463 = stdlib.eq(v462, v452);
                const v465 = stdlib.eq(v462, v434);
                const v553 = v465 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                const v554 = v463 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v553;
                v460 = v554;
                }
              const cv373 = false;
              const cv374 = v460;
              const cv375 = v453;
              const cv382 = v382;
              
              await (async () => {
                const v373 = cv373;
                const v374 = cv374;
                const v375 = cv375;
                const v382 = cv382;
                
                if (await (async () => {
                  const v390 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v390;})()) {
                  const v398 = stdlib.safeAdd(v375, v353);
                  sim_r.isHalt = false;
                  }
                else {
                  const v520 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v523 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:125:14:decimal', stdlib.UInt_max, '2'), v352);
                  const v525 = v520 ? v351 : v368;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v525,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v444],
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v351, v352, v353, v368, v382, v415, v416, v433, v434, v444],
              evt_cnt: 0,
              funcNum: 9,
              lct: v435,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v468, time: v467, didSend: v175, from: v466 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v368,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v468, time: v467, didSend: v175, from: v466 } = txn7;
            ;
            const v469 = stdlib.addressEq(v351, v466);
            const v470 = stdlib.addressEq(v368, v466);
            const v471 = v469 ? true : v470;
            stdlib.assert(v471, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:113:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:57:35:application',
              fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:30:function exp)', 'at ./index.rsh:113:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v449, v450, v451, v452], secs: v454, time: v453, didSend: v143, from: v448 } = txn6;
            ;
            const v455 = stdlib.addressEq(v351, v448);
            stdlib.assert(v455, {
              at: './index.rsh:112:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v456 = stdlib.digest([ctc0, ctc0], [v449, v450]);
            const v457 = stdlib.digestEq(v415, v456);
            stdlib.assert(v457, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:114:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v458 = stdlib.digest([ctc0, ctc0], [v451, v452]);
            const v459 = stdlib.digestEq(v416, v458);
            stdlib.assert(v459, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:115:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            let v460;
            const v461 = stdlib.eq(v452, v434);
            if (v461) {
              v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v462 = stdlib.safeAdd(v450, v433);
              const v463 = stdlib.eq(v462, v452);
              const v465 = stdlib.eq(v462, v434);
              const v553 = v465 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v554 = v463 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v553;
              v460 = v554;
              }
            const cv373 = false;
            const cv374 = v460;
            const cv375 = v453;
            const cv382 = v382;
            
            v373 = cv373;
            v374 = cv374;
            v375 = cv375;
            v382 = cv382;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v520 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v523 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:125:14:decimal', stdlib.UInt_max, '2'), v352);
    const v525 = v520 ? v351 : v368;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v374), {
      at: './index.rsh:128:28:application',
      fs: ['at ./index.rsh:127:10:application call to [unknown function] (defined at: ./index.rsh:127:28:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bool;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v352, v353], secs: v355, time: v354, didSend: v69, from: v351 } = txn1;
  ;
  const v364 = stdlib.safeAdd(v354, v353);
  stdlib.protect(ctc1, await interact.acceptWager(v352), {
    at: './index.rsh:70:29:application',
    fs: ['at ./index.rsh:69:13:application call to [unknown function] (defined at: ./index.rsh:69:16:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v351, v352, v353, v364],
    evt_cnt: 0,
    funcNum: 1,
    lct: v354,
    onlyIf: true,
    out_tys: [],
    pay: [v352, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v370, time: v369, didSend: v78, from: v368 } = txn2;
      
      const v372 = stdlib.add(v352, v352);
      sim_r.txns.push({
        amt: v352,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v373 = true;
      const v374 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v375 = v369;
      const v382 = v372;
      
      if (await (async () => {
        const v390 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v390;})()) {
        const v398 = stdlib.safeAdd(v375, v353);
        sim_r.isHalt = false;
        }
      else {
        const v520 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v523 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:125:14:decimal', stdlib.UInt_max, '2'), v352);
        const v525 = v520 ? v351 : v368;
        sim_r.txns.push({
          kind: 'from',
          to: v525,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v364],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v351, v352, v353, v364],
      evt_cnt: 0,
      funcNum: 2,
      lct: v354,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v538, time: v537, didSend: v290, from: v536 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v351,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v538, time: v537, didSend: v290, from: v536 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:57:35:application',
      fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:30:function exp)', 'at ./index.rsh:73:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v370, time: v369, didSend: v78, from: v368 } = txn2;
    const v372 = stdlib.add(v352, v352);
    ;
    let v373 = true;
    let v374 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v375 = v369;
    let v382 = v372;
    
    let txn3 = txn2;
    while (await (async () => {
      const v390 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v390;})()) {
      const v398 = stdlib.safeAdd(v375, v353);
      if (v373) {
        }
      else {
        stdlib.protect(ctc1, await interact.seeOutcome(v374), {
          at: './index.rsh:81:36:application',
          fs: ['at ./index.rsh:80:18:application call to [unknown function] (defined at: ./index.rsh:80:36:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        }
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v398],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v351, v352, v353, v368, v373, v382, v398],
          evt_cnt: 0,
          funcNum: 5,
          lct: v375,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v504, time: v503, didSend: v243, from: v502 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v368,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v504, time: v503, didSend: v243, from: v502 } = txn5;
        ;
        const v505 = stdlib.addressEq(v351, v502);
        const v506 = stdlib.addressEq(v368, v502);
        const v507 = v505 ? true : v506;
        stdlib.assert(v507, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:93:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:57:35:application',
          fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:30:function exp)', 'at ./index.rsh:93:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v415, v416], secs: v418, time: v417, didSend: v119, from: v414 } = txn4;
        ;
        const v419 = stdlib.addressEq(v351, v414);
        stdlib.assert(v419, {
          at: './index.rsh:92:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v426 = stdlib.safeAdd(v417, v353);
        const v430 = stdlib.protect(ctc0, await interact.raiseHand(), {
          at: './index.rsh:97:58:application',
          fs: ['at ./index.rsh:96:17:application call to [unknown function] (defined at: ./index.rsh:96:20:function exp)'],
          msg: 'raiseHand',
          who: 'Bob'
          });
        const v431 = stdlib.protect(ctc0, await interact.sayNumber(stdlib.checkedBigNumberify('./index.rsh:98:60:decimal', stdlib.UInt_max, '5')), {
          at: './index.rsh:98:59:application',
          fs: ['at ./index.rsh:96:17:application call to [unknown function] (defined at: ./index.rsh:96:20:function exp)'],
          msg: 'sayNumber',
          who: 'Bob'
          });
        
        const txn5 = await (ctc.sendrecv({
          args: [v351, v352, v353, v368, v382, v415, v416, v426, v430, v431],
          evt_cnt: 2,
          funcNum: 6,
          lct: v417,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:100:13:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v433, v434], secs: v436, time: v435, didSend: v131, from: v432 } = txn5;
            
            ;
            const v444 = stdlib.safeAdd(v435, v353);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v426],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v351, v352, v353, v368, v382, v415, v416, v426],
            evt_cnt: 0,
            funcNum: 7,
            lct: v417,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v486, time: v485, didSend: v209, from: v484 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v351,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v486, time: v485, didSend: v209, from: v484 } = txn6;
          ;
          const v487 = stdlib.addressEq(v351, v484);
          const v488 = stdlib.addressEq(v368, v484);
          const v489 = v487 ? true : v488;
          stdlib.assert(v489, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:101:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:57:35:application',
            fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:30:function exp)', 'at ./index.rsh:101:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v433, v434], secs: v436, time: v435, didSend: v131, from: v432 } = txn5;
          ;
          const v437 = stdlib.addressEq(v368, v432);
          stdlib.assert(v437, {
            at: './index.rsh:100:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v444 = stdlib.safeAdd(v435, v353);
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v444],
            waitIfNotPresent: false
            }));
          if (txn6.didTimeout) {
            const txn7 = await (ctc.sendrecv({
              args: [v351, v352, v353, v368, v382, v415, v416, v433, v434, v444],
              evt_cnt: 0,
              funcNum: 9,
              lct: v435,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn7) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v468, time: v467, didSend: v175, from: v466 } = txn7;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v368,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v468, time: v467, didSend: v175, from: v466 } = txn7;
            ;
            const v469 = stdlib.addressEq(v351, v466);
            const v470 = stdlib.addressEq(v368, v466);
            const v471 = v469 ? true : v470;
            stdlib.assert(v471, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:113:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:57:35:application',
              fs: ['at ./index.rsh:56:13:application call to [unknown function] (defined at: ./index.rsh:56:29:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:55:30:function exp)', 'at ./index.rsh:113:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v449, v450, v451, v452], secs: v454, time: v453, didSend: v143, from: v448 } = txn6;
            ;
            const v455 = stdlib.addressEq(v351, v448);
            stdlib.assert(v455, {
              at: './index.rsh:112:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v456 = stdlib.digest([ctc0, ctc0], [v449, v450]);
            const v457 = stdlib.digestEq(v415, v456);
            stdlib.assert(v457, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:114:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v458 = stdlib.digest([ctc0, ctc0], [v451, v452]);
            const v459 = stdlib.digestEq(v416, v458);
            stdlib.assert(v459, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:115:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            let v460;
            const v461 = stdlib.eq(v452, v434);
            if (v461) {
              v460 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v462 = stdlib.safeAdd(v450, v433);
              const v463 = stdlib.eq(v462, v452);
              const v465 = stdlib.eq(v462, v434);
              const v553 = v465 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v554 = v463 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2') : v553;
              v460 = v554;
              }
            const cv373 = false;
            const cv374 = v460;
            const cv375 = v453;
            const cv382 = v382;
            
            v373 = cv373;
            v374 = cv374;
            v375 = cv375;
            v382 = cv382;
            
            txn3 = txn6;
            continue;}
          
          }
        
        }
      
      }
    const v520 = stdlib.eq(v374, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v523 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:125:14:decimal', stdlib.UInt_max, '2'), v352);
    const v525 = v520 ? v351 : v368;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v374), {
      at: './index.rsh:128:28:application',
      fs: ['at ./index.rsh:127:10:application call to [unknown function] (defined at: ./index.rsh:127:28:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `ByAPAAEIBQkCIAdQKJgBqAFZUTAmAwEAAQEAIjUAMRhBBQkqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAAo5JIQcMQAGBSSQMQAEnSSEEDEAAVyEEEkQhBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQhbsggjshA0/7IHs0IEIkghBDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSVcAIDX/gaABWzX+STUFSUoiWzX9JFs1/IEQWzX7gRhbNfqABH+iO1I0/RZQNPwWUDT7FlA0+hZQsDIGNAMhC1sMRDT/MQASRDQDV1ggNP0WNPwWUAESRDQDV3ggNPsWNPoWUAESRDT6NP4SQQAGIzX5QgAcNPw0AyEKWwg1+CMiNPg0/hJNIQU0+DT6Ek01+TT/NAMhBls0AyEJWzQDVzAgIjT5MgY0AyEIW0IC70ghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyEKWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDIQhbsggjshA0/7IHs0IDBUmBBgxAAK9IIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEGWzX+IQlbNf1XMCA1/CEIWzX7V1ggNfpXeCA1+Uk1BUkiWzX4JFs194AESiHL/DT4FlA09xZQsDIGNAMhClsMRDT8MQASRDIGNP0INfY0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQNPYWUChLAVcAf2cpSwFXfzFnSCEENQEyBjUCQgJqSCU0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyENW7III7IQNP+yB7NCAf9JIQUMQADgSYEEDEAAmEglNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQlbNf1XMCA1/CENWzX7STUFSVcAIDX6VyAgNfmABGBdpCs0+lA0+VCwMgY0AyEMWwxENP8xABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUChLAVcAf2cpSwFXfyFnSCEHNQEyBjUCQgF0IQUSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhDlsPRLEisgE0AyEGW7III7IQNANXACCyB7NCARhJIwxAAElIIzQBEkQ0BEkiEkw0AhIRRChkSTUDIQZbNf+ABJqLkXSwMgY0AyEOWwxENP+IAU80A1cAIDT/NAMhCVsxACMjMgY0/0kIQgBfSIGgjQaIAS4iNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP+IAP4yBjT+CDX9MQA0/xZQNP4WUDT9FlAoSwFXADhnSCM1ATIGNQJCAIU1/zX+Nf01/DX7Nfo1+TX4NP0jEkEANTT+NPoINfc0+DT5FlA0+hZQNPtQNPwWUQcIUDT/FlA09xZQKEsBVwBhZ0glNQEyBjUCQgA5sSKyASEFNPkLsggjshA0+zT4NP0hBRJNsgezQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v352",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v353",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v352",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v353",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v416",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v433",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v434",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v449",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v450",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v451",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v452",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v415",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v416",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v433",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v434",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v449",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v450",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v451",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v452",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001e7738038062001e778339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611afa806200037d6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d53660046115ca565b610197565b6100a16100e83660046115ed565b6103fc565b6100a16100fb3660046115ed565b610596565b34801561010c57600080fd5b506001546100b4565b6100a16101233660046115ed565b610714565b34801561013457600080fd5b5061013d6108af565b6040516100be9291906115ff565b6100a16101593660046115ed565b61094c565b6100a161016c36600461165c565b610ae3565b6100a161017f3660046115ed565b610dd6565b6100a16101923660046115ca565b610f72565b6101a7600760005414601c6111e3565b6101c1813515806101ba57506001548235145b601d6111e3565b6000808055600280546101d39061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff9061166e565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906116f7565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e6111e3565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be9291906117a3565b60405180910390a16102d23415601a6111e3565b60608201516102ed906001600160a01b03163314601b6111e3565b6102fb438360400151611209565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d1918391016117d4565b604051602081830303815290604052600290805190602001906103f592919061147a565b5050505050565b61040c60016000541460096111e3565b6104268135158061041f57506001548235145b600a6111e3565b6000808055600280546104389061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546104649061166e565b80156104b15780601f10610486576101008083540402835291602001916104b1565b820191906000526020600020905b81548152906001019060200180831161049457829003601f168201915b50505050508060200190518101906104c9919061185b565b90506104dc81606001514310600b6111e3565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050d9291906118e2565b60405180910390a16105268160200151341460086111e3565b61052e6114fe565b815181516001600160a01b039091169052602080830180518351830152604080850151845182015283513360609091015282840180516001908190528151909401939093529151439201919091525180016020820151606001526105918161125c565b505050565b6105a6600160005414600d6111e3565b6105c0813515806105b957506001548235145b600e6111e3565b6000808055600280546105d29061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546105fe9061166e565b801561064b5780601f106106205761010080835404028352916020019161064b565b820191906000526020600020905b81548152906001019060200180831161062e57829003601f168201915b5050505050806020019051810190610663919061185b565b90506106778160600151431015600f6111e3565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106a89291906118e2565b60405180910390a16106bc3415600c6111e3565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106f9573d6000803e3d6000fd5b506000808055600181905561071090600290611560565b5050565b61072460056000541460176111e3565b61073e8135158061073757506001548235145b60186111e3565b6000808055600280546107509061166e565b80601f016020809104026020016040519081016040528092919081815260200182805461077c9061166e565b80156107c95780601f1061079e576101008083540402835291602001916107c9565b820191906000526020600020905b8154815290600101906020018083116107ac57829003601f168201915b50505050508060200190518101906107e1919061191a565b90506107f58160c0015143101560196111e3565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d33836040516108269291906118e2565b60405180910390a161083a341560156111e3565b805161086e906001600160a01b031633146108645760608201516001600160a01b03163314610867565b60015b60166111e3565b80606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f193505050501580156106f9573d6000803e3d6000fd5b6000606060005460028080546108c49061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546108f09061166e565b801561093d5780601f106109125761010080835404028352916020019161093d565b820191906000526020600020905b81548152906001019060200180831161092057829003601f168201915b50505050509050915091509091565b61095c60076000541460216111e3565b6109768135158061096f57506001548235145b60226111e3565b6000808055600280546109889061166e565b80601f01602080910402602001604051908101604052809291908181526020018280546109b49061166e565b8015610a015780601f106109d657610100808354040283529160200191610a01565b820191906000526020600020905b8154815290600101906020018083116109e457829003601f168201915b5050505050806020019051810190610a1991906116f7565b9050610a2d8160e0015143101560236111e3565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a5e9291906118e2565b60405180910390a1610a723415601f6111e3565b8051610aa6906001600160a01b03163314610a9c5760608201516001600160a01b03163314610a9f565b60015b60206111e3565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106f9573d6000803e3d6000fd5b610af360096000541460286111e3565b610b0d81351580610b0657506001548235145b60296111e3565b600080805560028054610b1f9061166e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4b9061166e565b8015610b985780601f10610b6d57610100808354040283529160200191610b98565b820191906000526020600020905b815481529060010190602001808311610b7b57829003601f168201915b5050505050806020019051810190610bb091906119c0565b9050610bcf604051806040016040528060008152602001600081525090565b610be18261012001514310602a6111e3565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c54341560246111e3565b8151610c6c906001600160a01b0316331460256111e3565b60408051610cb891610c9291602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a001511460266111e3565b604080516060858101356020830152608086013592820192909252610cfe91016040516020818303038152906040528051906020012060001c8360c001511460276111e3565b61010082015160808401351415610d185760018152610d62565b610d2d83602001602001358360e00151611209565b60208201819052608084013514610d5c57816101000151816020015114610d55576001610d5f565b6000610d5f565b60025b81525b610d6a6114fe565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169381019390935281840180516000905285518151909301929092528151439101526080850151905190910152610dd08161125c565b50505050565b610de6600960005414602d6111e3565b610e0081351580610df957506001548235145b602e6111e3565b600080805560028054610e129061166e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3e9061166e565b8015610e8b5780601f10610e6057610100808354040283529160200191610e8b565b820191906000526020600020905b815481529060010190602001808311610e6e57829003601f168201915b5050505050806020019051810190610ea391906119c0565b9050610eb8816101200151431015602f6111e3565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610ee99291906118e2565b60405180910390a1610efd3415602b6111e3565b8051610f31906001600160a01b03163314610f275760608201516001600160a01b03163314610f2a565b60015b602c6111e3565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106f9573d6000803e3d6000fd5b610f8260056000541460126111e3565b610f9c81351580610f9557506001548235145b60136111e3565b600080805560028054610fae9061166e565b80601f0160208091040260200160405190810160405280929190818152602001828054610fda9061166e565b80156110275780601f10610ffc57610100808354040283529160200191611027565b820191906000526020600020905b81548152906001019060200180831161100a57829003601f168201915b505050505080602001905181019061103f919061191a565b90506110576040518060200160405280600081525090565b6110688260c00151431060146111e3565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a33846040516110999291906117a3565b60405180910390a16110ad341560106111e3565b81516110c5906001600160a01b0316331460116111e3565b6110d3438360400151611209565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b03908116825260208085015181840152604080860151818501526060808701519093169284019290925260a080860151608085015286820135908401528582013560c0840152835160e084015260076000554360015590516103d19183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b816107105760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000826112168382611a6b565b91508110156112565760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611200565b92915050565b604080516020810190915260008152600182602001516020015114156113b557611296826020015160400151836000015160400151611209565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101919091528251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101519093168385015281860180515115156080860152519092015160a0840152835160c084015260056000554360015590516113919183910181516001600160a01b03908116825260208084015190830152604080840151908301526060808401519091169082015260808083015115159082015260a0828101519082015260c0918201519181019190915260e00190565b60405160208183030381529060405260029080519060200190610dd092919061147a565b6002826020015160200151146113d0578151606001516113d4565b8151515b6001600160a01b03166108fc6113f3600285600001516020015161141b565b6040518115909202916000818181858888f193505050501580156106f9573d6000803e3d6000fd5b600081158061143f575082826114318183611a83565b925061143d9083611aa2565b145b6112565760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611200565b8280546114869061166e565b90600052602060002090601f0160209004810192826114a857600085556114ee565b82601f106114c157805160ff19168380011785556114ee565b828001600101855582156114ee579182015b828111156114ee5782518255916020019190600101906114d3565b506114fa92915061159d565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161155b60405180608001604052806000151581526020016000815260200160008152602001600081525090565b905290565b50805461156c9061166e565b6000825580601f1061157c575050565b601f01602090049060005260206000209081019061159a919061159d565b50565b5b808211156114fa576000815560010161159e565b6000606082840312156115c457600080fd5b50919050565b6000606082840312156115dc57600080fd5b6115e683836115b2565b9392505050565b6000604082840312156115c457600080fd5b82815260006020604081840152835180604085015260005b8181101561163357858101830151858201606001528201611617565b81811115611645576000606083870101525b50601f01601f191692909201606001949350505050565b600060a082840312156115c457600080fd5b600181811c9082168061168257607f821691505b602082108114156115c457634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156116d557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146116f257600080fd5b919050565b600061010080838503121561170b57600080fd5b6040519081019067ffffffffffffffff8211818310171561173c57634e487b7160e01b600052604160045260246000fd5b81604052611749846116db565b8152602084015160208201526040840151604082015261176b606085016116db565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152608081016115e660208301848035825260208082013590830152604090810135910152565b81516001600160a01b0316815261014081016020830151602083015260408301516040830152606083015161181460608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b60006080828403121561186d57600080fd5b6040516080810181811067ffffffffffffffff8211171561189e57634e487b7160e01b600052604160045260246000fd5b6040526118aa836116db565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b801515811461159a57600080fd5b6001600160a01b03831681528135602080830191909152606082019083013561190a816118d4565b8015156040840152509392505050565b600060e0828403121561192c57600080fd5b60405160e0810181811067ffffffffffffffff8211171561195d57634e487b7160e01b600052604160045260246000fd5b604052611969836116db565b8152602083015160208201526040830151604082015261198b606084016116db565b6060820152608083015161199e816118d4565b608082015260a0838101519082015260c0928301519281019290925250919050565b600061014082840312156119d357600080fd5b6119db6116a3565b6119e4836116db565b81526020830151602082015260408301516040820152611a06606084016116db565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611a7e57611a7e611a55565b500190565b6000816000190483118215151615611a9d57611a9d611a55565b500290565b600082611abf57634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122020d74c084f5dba3c4a72a28973530e48980fcd8d1ea62f625b88625c125c5fd264736f6c634300080c0033`,
  BytecodeLen: 7799,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:67:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:73:56:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:126:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:78:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:93:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:94:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:101:60:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:102:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:113:58:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
