import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  TouchableHighlight
} from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class UserList extends React.Component {
  static navigationOptions = {
    title: 'User List'
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired
  };

  state = {
    userDataSource: ds
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(json)
        })
      );
  }

  displayUserDetails(user) {
    this.props.navigation.navigate('UserDetails', { user });
  }

  renderRow = user => {
    return (
      <TouchableHighlight onPress={() => this.displayUserDetails(user)}>
        <View style={styles.row}>
          <Text style={styles.rowText}>{user.name}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <View>
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
