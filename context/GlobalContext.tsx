import { createContext, useReducer } from 'react'
import combineReducers from 'react-combine-reducers';
import { reducer as web3Reducer, initialState as web3InitialState } from './Web3Context'
import { reducer as contractReducer, initialState as contractInitialState } from './ContractContext'

export const GlobalContext = createContext({})

export const GlobalContextProvider = ({ children }) => {
    const [reducer, initialState] = combineReducers({
        web3: [web3Reducer, web3InitialState],
        contract: [contractReducer, contractInitialState]
    })

   const [state, dispatch] = useReducer(reducer, initialState)

    return <GlobalContext.Provider value={{ ...state, dispatch }}>{children}</GlobalContext.Provider>
}
