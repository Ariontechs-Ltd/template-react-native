import React from 'react'
import { 
    View,
    Text,
} from 'react-native'
import styles from './styles/TemplatePageStyles'
import useTemplate from '../hooks/useTemplate'

export default () => {

    const {state, actions, refs} = useTemplate()

    return (
        <View style={styles.container}>
            <Text>Template</Text>
        </View>
    )
}