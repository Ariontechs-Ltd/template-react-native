import DebugConfig from './DebugConfig'
import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'

if (DebugConfig.useReactotron) {
    
  Reactotron
    .configure()
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage) 
    .connect()

  Reactotron.clear()
  console.tron = Reactotron
}
else console.tron = {display: () => {}, log: () => {}}
