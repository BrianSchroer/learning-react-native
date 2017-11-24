import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

const AppNavigation = StackNavigator({
  Home: { screen: UserList },
  UserDetails: { screen: UserDetails }
});

export default class App extends React.Component {
  render() {
    return <AppNavigation />;
  }
}

const styles = StyleSheet.create({
  container: { marginTop: 25 }
});
