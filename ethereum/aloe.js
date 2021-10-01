// const dotenv = require('dotenv')
// dotenv.config()

import web3 from './web3'

const Aloe = require('./build/Aloe.json')

const instance = new web3.eth.Contract(Aloe.abi, '0x3a5111f4585b90856b4a8Bf5fa070C5DF9619EC1')

export default instance