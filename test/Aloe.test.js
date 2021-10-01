const Aloe = artifacts.require('./Aloe.sol')

require('chai').use(require('chai-as-promised')).should()

contract('Aloe', accounts => {
    let contract

    before(async () => {
        contract = await Aloe.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const contractAddress = await contract.address

            assert.notEqual(contractAddress, '')
            assert.notEqual(contractAddress, 0x0)
            assert.notEqual(contractAddress, null)
            assert.notEqual(contractAddress, undefined)
        })

        it('has a name', async () => {
            const contractName = await contract.name()
            console.log('CONTRACT NAME', contractName)
            assert.equal(contractName, 'Aloe')
        })

        it('has a symbol', async () => {
            const contractSymbol = await contract.symbol()
            assert.equal(contractSymbol, 'ALOE')
        })
    })
})
