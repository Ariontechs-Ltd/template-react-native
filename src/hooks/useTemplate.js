import React from 'react'
import {TemplateContext} from '../contexts/TemplateContext'
import { useNavigation , useRoute} from '@react-navigation/native'
import { Button } from 'react-native'

export default () => {

    const [state, actions] = React.useContext(TemplateContext)
    
    const navigation = useNavigation()
    const route = useRoute()

    React.useEffect(() => {
        console.log(state)
    }, [state])


    const onPressMe = () => {
        actions.listPosts()
    }

    return {
        state:{
            fetching: state.fetching,
            data: state.data,
            error: state.error
        },
        refs: {
        },
        actions: {
            onPressMe
        },
    }
}