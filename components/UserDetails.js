import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default class UserDetails extends React.Component {
  static navigationOptions = {
    title: 'User Details'
  };

  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          user: PropTypes.object.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  render() {
    const { user } = this.props.navigation.state.params;
    const { address } = user;
    return (
      <View>
        <View>
          <Text>{user.name}</Text>
        </View>
        <View>
          <Text>{user.email}</Text>
        </View>
        <View>
          <Text>
            {address.street} {address.suite}
          </Text>
        </View>
        <View>
          <Text>{address.city}</Text>
        </View>
        <View>
          <Text>{user.phone}</Text>
        </View>
      </View>
    );
  }
}
