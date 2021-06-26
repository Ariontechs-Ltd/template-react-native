import React from 'react'
import TemplateReducer, {INIT_STATE, ACTIONS} from '../reducers/TemplateReducer'

// import { API, graphqlOperation } from 'aws-amplify'
// import * as gql from '../graphql/gql'

const TemplateContext = React.createContext([{}, () => {}])
const TemplateProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(TemplateReducer, INIT_STATE)
    const actions = React.useMemo(() => ({
        listPosts:  async () =>  {
            dispatch({type: ACTIONS.START})
            try {
                const response = await fetch('http://localhost:3000/posts')
                const data = await response.json()
                dispatch({type: ACTIONS.SUCCESS, data})
            } catch (error) {
                dispatch({type: ACTIONS.FAILURE, error})
            }
        }
    }), [])
    return (
        <TemplateContext.Provider value={[state, actions]}>
            {children}
        </TemplateContext.Provider>
    )
}

export {TemplateContext, TemplateProvider, ACTIONS}