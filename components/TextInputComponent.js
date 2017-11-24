import React from 'react';
import { StyleSheet, View, TextInput, Switch } from 'react-native';

export default class TextInputComponent extends React.Component {
  state = {
    textValue: '',
    switchValue: false
  };

  handleTextChange = value => {
    this.setState({ textValue: value });
  };

  handleSwitchChange = value => {
    this.setState({ switchValue: value });
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter Text"
          value={this.state.textValue}
          onChangeText={this.handleTextChange}
        />
        <Switch
          value={this.state.switchValue}
          onValueChange={this.handleSwitchChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
