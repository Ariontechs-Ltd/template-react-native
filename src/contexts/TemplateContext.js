import React from 'react'
import TemplateReducer, {INIT_STATE, ACTIONS} from '../reducers/TemplateReducer'

// import { API, graphqlOperation } from 'aws-amplify'
// import * as gql from '../graphql/gql'

const TemplateContext = React.createContext([{}, () => {}])
const TemplateProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(TemplateReducer, INIT_STATE)
    const actions = React.useMemo(() => ({

    }), [])
    return (
        <TemplateContext.Provider value={[state, actions]}>
            {children}
        </TemplateContext.Provider>
    )
}

export {TemplateContext, TemplateProvider, ACTIONS}