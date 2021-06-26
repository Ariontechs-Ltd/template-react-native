import React from 'react'
import { 
    View,
    Text,
    Button,
    ActivityIndicator,
} from 'react-native'
import styles from './styles/TemplatePageStyles'
import useTemplate from '../hooks/useTemplate'
import {t} from '../translations'

export default () => {

    const {state, actions, refs} = useTemplate()

    return (
        <View style={styles.container}>
            <Text>HELLO</Text>

            <Button title="ClickME" onPress={actions.onPressMe} />
            <ActivityIndicator size='large' color="#0000ff" animating={state.fetching} />
            {
                state.data?.map(v => <Text key={v.id}>{v.author}</Text>)
            }
            {/* <Text>{}</Text> */}
        </View>
    )
}