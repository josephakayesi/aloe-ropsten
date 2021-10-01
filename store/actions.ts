class Actions {
    Web3Loaded(connection) {
        return {
            type: 'WEB3_LOADED',
            connection,
        }
    }

    Web3NetworkLoaded(network) {
        return {
            type: 'WEB3_NETWORK_LOADED',
            network,
        }
    }

    Web3AccountLoaded(account) {
        return {
            type: 'WEB3_ACCOUNT_LOADED',
            account,
        }
    }

    Web3BalanceLoaded(balance) {
        return {
            type: 'WEB3_BALANCE_LOADED',
            balance,
        }
    }

    ContractLoaded(contract) {
        console.log('contract loaded')
        return {
            type: 'CONTRACT_LOADED',
            contract,
        }
    }

    MetadataLoaded(metadata) {
        console.log('metadata loaded')
        return {
            type: 'METADATA_LOADED',
            metadata,
        }
    }

    NFTStateLoaded(state) {
        return {
            type: 'NFT_STATE_LOADED',
            state,
        }
    }
}

export default new Actions()