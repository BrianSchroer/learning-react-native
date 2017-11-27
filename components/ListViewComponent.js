import React from 'react';
import { StyleSheet, View, Text, ListView } from 'react-native';

const users = [
  { name: 'John Do' },
  { name: 'Brad Traversy' },
  { name: 'Steve Smith' },
  { name: 'Janet Williams' }
];

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class ListViewComponent extends React.Component {
  static navigationOptions = {
    title: 'ListView'
  };

  state = {
    userDataSource: ds.cloneWithRows(users)
  };

  renderRow = user => {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
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
