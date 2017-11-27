import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import Component1 from './components/Component1';
import ListViewComponent from './components/ListViewComponent';
import InputComponents from './components/InputComponents';
import Modals from './components/Modals';
import WebViewComponent from './components/WebViewComponent';

const AppNavigation = StackNavigator({
  Home: { screen: Home },
  UserList: { screen: UserList },
  UserDetails: { screen: UserDetails },
  Component1: { screen: Component1 },
  ListView: { screen: ListViewComponent },
  InputComponents: { screen: InputComponents },
  Modals: { screen: Modals },
  WebView: { screen: WebViewComponent }
});

export default class App extends React.Component {
  render() {
    return <AppNavigation />;
  }
}
