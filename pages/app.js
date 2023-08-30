
window.addEventListener('load', async () => {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log("Web3 not found. Please install MetaMask.");
        return;
    }

    // Replace with your contract address and ABI
    const contractAddress ='0x6f825A2F1cEb1c354100958b05aC56c5A75B1a09';
    const contractAbi = [
		{
		  "inputs": [],
		  "stateMutability": "nonpayable",
		  "type": "constructor"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "account",
			  "type": "address"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "amount",
			  "type": "uint256"
			}
		  ],
		  "name": "BalanceBurned",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "account",
			  "type": "address"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "amount",
			  "type": "uint256"
			}
		  ],
		  "name": "BalanceDeposited",
		  "type": "event"
		},
		{
		  "anonymous": false,
		  "inputs": [
			{
			  "indexed": true,
			  "internalType": "address",
			  "name": "account",
			  "type": "address"
			},
			{
			  "indexed": false,
			  "internalType": "uint256",
			  "name": "amount",
			  "type": "uint256"
			}
		  ],
		  "name": "BalanceWithdrawn",
		  "type": "event"
		},
		{
		  "inputs": [
			{
			  "internalType": "uint256",
			  "name": "amount",
			  "type": "uint256"
			}
		  ],
		  "name": "burnBalance",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "depositBalance",
		  "outputs": [],
		  "stateMutability": "payable",
		  "type": "function"
		},
		{
		  "inputs": [],
		  "name": "getContractBalance",
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
		  "name": "showBalance",
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
			  "internalType": "uint256",
			  "name": "amount",
			  "type": "uint256"
			}
		  ],
		  "name": "withdrawBalance",
		  "outputs": [],
		  "stateMutability": "nonpayable",
		  "type": "function"
		}
	  ];

    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];

    document.getElementById('userAddress').textContent = userAddress;
    document.getElementById('contractAddress').textContent = contractAddress;
});

async function deposit() {
    const depositAmount = document.getElementById('depositAmount').value;
    if (!depositAmount) return;

    await web3.eth.sendTransaction({
        to: contractAddress,
        from: userAddress,
        value: web3.utils.toWei(depositAmount, 'ether')
    });

    showBalance();
}

async function withdraw() {
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    if (!withdrawAmount) return;

    await contract.methods.withdrawBalance(web3.utils.toWei(withdrawAmount, 'ether')).send({ from: userAddress });

    showBalance();
}

async function showBalance() {
    const balance = await contract.methods.showBalance().call({ from: userAddress });
    document.getElementById('userBalance').textContent = web3.utils.fromWei(balance, 'ether');
    document.getElementById('balanceDisplay').textContent = `Your balance is: ${web3.utils.fromWei(balance, 'ether')} ETH`;
}
