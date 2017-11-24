import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import TextInputComponent from './TextInputComponent';
import ListViewComponent from './ListViewComponent';

export default class Component1 extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  static defaultProps = {
    message: 'Default message'
  };

  handleHighlightPress = () => {
    console.log('Highlight pressed');
  };

  handleOpacityPress = () => {
    console.log('Opacity pressed');
  };

  render() {
    return (
      <View>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>{this.props.message}</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.v1}
            underlayColor="blue"
            onPress={this.handleHighlightPress}
          >
            <Text style={styles.vText}>View 1</Text>
          </TouchableHighlight>
          <TouchableOpacity style={styles.v2} onPress={this.handleOpacityPress}>
            <Text style={styles.vText}>View 2</Text>
          </TouchableOpacity>
          <TouchableHighlight style={styles.v3}>
            <Text style={styles.vText}>View 3</Text>
          </TouchableHighlight>
        </View>
        <TextInputComponent />
        <ListViewComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greetingContainer: {
    backgroundColor: 'blue'
  },
  greeting: {
    color: 'white'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1: { flex: 1, backgroundColor: 'red', padding: 10 },
  v2: { flex: 1, backgroundColor: 'green', padding: 10 },
  v3: { flex: 1, backgroundColor: 'black', padding: 10 },
  vText: { color: 'white' }
});
