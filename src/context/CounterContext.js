import React, {createContext, useReducer} from 'react'

export const CounterContext = createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + 1
            }
        default:
            return state
    }
}

export const CounterProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    return (
        <CounterContext.Provider value={{state, dispatch}}>
            {children}
        </CounterContext.Provider>
    )
}
