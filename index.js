/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/pages/App';
import {name as appName} from './app.json';
import GlobalStateProvider from './src/contexts/GlobalStateProvider'
import './src/config/ReactotronConfig'

const Main = () => (
    <GlobalStateProvider>
        <App />
    </GlobalStateProvider>
)

AppRegistry.registerComponent(appName, () => Main);
