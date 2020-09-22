import React from 'react'
import {TemplateContext} from '../contexts/TemplateContext'
import { useNavigation , useRoute} from '@react-navigation/native'

export default () => {

    const [state, actions] = React.useContext(TemplateContext)
    const navigation = useNavigation()
    const route = useRoute()

    return {
        state:{
        },
        refs: {
        },
        actions: {
        },
    }
}