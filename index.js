/**
 * @format
 */

// RNA RNI react-native-gesture-handler drawer navigation
import 'react-native-gesture-handler';
import {AppRegistry, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false

AppRegistry.registerComponent(appName, () => App);
