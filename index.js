/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import Home from './Screen/Home';
import Search from './Screen/Search';
import FoodDetails from './Screen/FoodDetails';
import UserProfile from './Screen/UserProfile';
import Order from './Screen/Order';
import Saved from './Screen/Saved';
AppRegistry.registerComponent(appName, () => Saved);
