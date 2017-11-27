import React from 'react';
import {
  StyleSheet,
  View,
  Picker,
  Text,
  TextInput,
  Switch,
  DatePickerAndroid,
  Button,
  Alert
} from 'react-native';

export default class InputComponents extends React.Component {
  static navigationOptions = {
    title: 'Input Components'
  };

  state = {
    textValue: '',
    switchValue: false,
    language: 'js',
    date: new Date()
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

  handleDatePickerRequest = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: this.state.date
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const date = new Date(year, month, day);
        this.setState({ date });
      }
    } catch ({ code, message }) {
      console.warn('DatePicker error', message);
    }
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
        <Text style={styles.label}>DatePickerAndroid:</Text>
        <Button onPress={this.handleDatePickerRequest} title="Pick a Date" />
        <Text>{this.state.date.toLocaleDateString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: { fontWeight: 'bold' }
});
