import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';

const menuItems = [
  { routeName: 'Component1', description: 'Component1' },
  { routeName: 'ListView', description: 'ListView' },
  { routeName: 'InputComponents', description: 'Input Components' },
  { routeName: 'UserList', description: 'UserList' },
  { routeName: 'Modals', description: 'Modals and Alerts' },
  { routeName: 'WebView', description: 'Web View' },
  { routeName: 'Animated', description: 'Animated API' }
];

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  state = {
    userDataSource: ds
  };

  componentDidMount() {
    this.buildMenu();
  }

  buildMenu() {
    this.setState({
      userDataSource: this.state.userDataSource.cloneWithRows(menuItems)
    });
  }

  handleMenuItemSelect(menuItem) {
    this.props.navigation.navigate(menuItem.routeName);
  }

  renderRow = menuItem => {
    return (
      <TouchableHighlight onPress={() => this.handleMenuItemSelect(menuItem)}>
        <View style={styles.row}>
          <Text style={styles.rowText}>{menuItem.description}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View>
        <Image
          source={require('../images/ReactNative.png')}
          resizeMode={'cover'}
          style={{ width }}
        />
        <ListView
          dataSource={this.state.userDataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3
  },
  rowText: {
    flex: 1
  }
});
