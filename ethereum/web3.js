const Web3 = require('web3')

let web3

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in the browser and metamask is running
    web3 = new Web3(window.ethereum)
} else {
    // we are on the server or the user is not running metamask
    // const provider = new Web3.providers.HttpProvider(process.env.RINKEBY_NETWORK_URL)
    const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/1dc840ea53f04c0daef5b4733e7924a1')

    web3 = new Web3(provider)
}

module.exports = web3
