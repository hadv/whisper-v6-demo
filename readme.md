## Ethereum Whisper V.6 test

Project contains 2  files :  **sshpost.js** (sends ssh messages)   and **subscriber.js** the message receiver.

**Running GETH:** 

    ./geth --syncmode "light" --shh --rpc --rpcaddr "0.0.0.0" --rpcapi "eth,net,web3,admin,shh" --rpccorsdomain "*" --datadir "lightdata" --ws --wsaddr "0.0.0.0" --wsapi "eth,net,web3,admin,shh" --wsorigins "*" console

Adding *enodes* for fast syncing :  https://gist.githubusercontent.com/achiko/75131fa1b738a52967d61cc55bc8a4de/raw/df7bda42d345eace7bf60a493fd1256fa99bd966/lightclient-peers-mainnet-latest.txt