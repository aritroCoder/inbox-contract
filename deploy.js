const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const INITIAL_STRING = 'Hi there!';

const provider = new HDWalletProvider(
    '/**enter your wallet recovery phrase here**/',
    'https://rinkeby.infura.io/v3/0f11868ab38f4a14b8632271c017c836'
); //paste account mnemonic/recovery phrase here and the rinkeby api link from infura

const web3 = new Web3(provider);

const deploy = async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log("Ateempting to deploy from account", accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
     .deploy({ data:bytecode, arguments:[INITIAL_STRING] })
     .send({ gas:'1000000', from: accounts[0] })
    console.log("Contract deployed to: ", result.options.address);
}

deploy();