import React from 'react';
import {
  StyleSheet,
  View,
  Picker,
  Text,
  TextInput,
  Switch
} from 'react-native';

export default class InputComponents extends React.Component {
  static navigationOptions = {
    title: 'Input Components'
  };

  state = {
    textValue: '',
    switchValue: false,
    language: 'js'
  };

  handleTextChange = value => {
    this.setState({ textValue: value });
  };

  handlePickerChange = (value, index) => {
    this.setState({ language: value });
  };

  handleSwitchChange = value => {
    this.setState({ switchValue: value });
  };

  render() {
    return (
      <View>
        <Text style={styles.label}>TextInput:</Text>
        <TextInput
          placeholder="Enter Text"
          value={this.state.textValue}
          onChangeText={this.handleTextChange}
        />
        <Text style={styles.label}>Switch:</Text>
        <Switch
          value={this.state.switchValue}
          onValueChange={this.handleSwitchChange}
        />
        <Text style={styles.label}>Picker:</Text>
        <Picker
          selectedValue={this.state.language}
          onValueChange={this.handlePickerChange}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="C#" value="cs" />
          <Picker.Item label="Python" value="python" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: { fontWeight: 'bold' }
});
