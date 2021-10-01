export const initialState = {
    loaded: false,
    contract: null,
    metadata: null,
    state: null,
}

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'CONTRACT_LOADED':
            return { ...state, loaded: true, contract: action.contract }
        case 'METADATA_LOADED':
            console.log('METADATA_LOADED', action)
            return { ...state, loaded: true, metadata: action.metadata }
        case 'NFT_STATE_LOADED':
            return { ...state, loaded: true, state: action.state }
        default:
            return state
    }
}