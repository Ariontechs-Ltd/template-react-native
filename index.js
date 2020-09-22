/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/pages/App';
import {name as appName} from './app.json';
import './src/config/ReactotronConfig';

AppRegistry.registerComponent(appName, () => App);
