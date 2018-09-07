// Subscriber
const Web3 = require('web3');
const web3 = new Web3('ws://localhost:8548');
const shh = web3.shh;


shh.generateSymKeyFromPassword("shhpost").then((symKeyID) => {

    shh.subscribe('messages', {
        symKeyID: symKeyID,
        topics: ['0x07678231'],
    }, function (err, msg) {
        console.log("------------- symKeyID ----------------------");
        console.log(symKeyID);
        console.log("-----------------------------------");
        console.log(msg);
        if(msg !== null) {
            console.log('Payload : ', msg.payload );
        }
    });
});