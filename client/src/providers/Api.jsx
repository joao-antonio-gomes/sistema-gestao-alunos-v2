import React from 'react'
import {get, post} from '../api'
export const ApiContext = React.createContext({})

const ApiProvider = (props) => {
    return (
        <ApiContext.Provider value={{api: {get, post}}}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiProvider
