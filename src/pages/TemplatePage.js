import React from 'react'
import { 
    View,
    Text,
} from 'react-native'
import styles from './styles/TemplatePageStyles'
import useTemplate from '../hooks/useTemplate'
import {t} from '../translations'

export default () => {

    const {state, actions, refs} = useTemplate()

    return (
        <View style={styles.container}>
            <Text>{t('hello', {name: 'Template'})}</Text>
        </View>
    )
}