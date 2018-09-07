const Web3 = require('web3');
const web3 = new Web3('ws://localhost:8546');
const shh = web3.shh;



shh.generateSymKeyFromPassword("shhpost").then((symKeyID) => {

    console.log(symKeyID);

    var message = {
        "symKeyID": symKeyID,
        "ttl": 100,
        "topic": "0x07678231",
        "powTarget": 2.0,
        "powTime": 2,
        "payload": "0x68656c6c6f"
    }


    console.log(message);

    shh.post(message).then((result, err) => {
        console.log(err);
        console.log(' shh post result :  ', result);
    });

});
