# Bajaj ATM contract
A solidity smart contract called BankATM that provides basic banking services including deposits, withdrawals, and account balance retrieval is included in this repository. The contract also contains a frontend interface for communicating with the contract on the Ethereum network.





## Contract Functionality


Smart Contract for Bajaj BankATM:
A solidity smart contract called BankATM that provides basic banking services including deposits, withdrawals, and account balance retrieval is included in this repository. The contract also contains a frontend interface for communicating with the contract on the Ethereum network.

Details about Smart Contract 
The Bajaj BankATM contract has the following functions:

1. depositBalance(): This function allows users to deposit funds into the contract. The amount must be greater than 0, and the sender must be the owner of the contract.
2. withdrawBalance(): This function allows users to withdraw funds from the contract. The amount must be greater than 0, and the sender must have enough funds in their balance.
3. burnBalance(): This function allows the owner of the contract to burn funds. The amount must be greater than 0, and the sender must be the owner of the contract.
4. showBalance(): This function allows users to view their balance in the contract.
5. getContractBalance(): This function allows the owner of the contract to view the balance of the contract.

The contract also has a few modifiers:
1. onlyOwner(): This modifier ensures that only the owner of the contract can call the function.

The contract uses a mapping to store the balance of each user. The mapping is indexed by the address of the user.

The contract also emits events to track the following activities:
1. Balance deposited
2. Balance withdrawn
3. Balance burned

## DEPLOYMENT
Then, write the code for the front end and use the artefacts abi to connect the back end with the front end. Create a hardhat project, add a contract to it, run your blockchain through the Goerli Testnet, and finally, write the code for the back end.
Run the fronted right away to check every capability. 
Additionally, amend the contract address field up front if your address changes during a DEPLOYMENT.
## Hardhat Installing

1. npm install --save-dev hardhat

2. npx hardhat 

3. Create a javascript project 

4. write the contract 

5. Run the blockchain

6. Deploy the contract 
   npx hardhat run scripts/deploy.js --network goerli 

7. Make a frontend page and implement all the function in the code 

8. Now entere your contract address
   
9. enter you abi
    
11. run your project
    
13. Test the project by connecting your wallet
    
15. Make sure you have the testnet amount present in wallet whatever the network you are deploying


## Author
Vidhika Bajaj

## License
This project is licensed under the MIT License
