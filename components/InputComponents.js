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
    emailAddress: '',
    numeric: '',
    phonePad: '',
    switchValue: false,
    language: 'js',
    date: new Date()
  };

  handleTextChange = (key, value) => {
    const newState = {};
    newState[key] = value;
    this.setState(newState);
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
          style={styles.textInput}
          placeholder="Enter Text"
          value={this.state.textValue}
          onChangeText={value => this.handleTextChange('textValue', value)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email Address"
          value={this.state.emailAddress}
          onChangeText={value => this.handleTextChange('emailAddress', value)}
          keyboardType={'email-address'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Numeric"
          value={this.state.numeric}
          onChangeText={value => this.handleTextChange('numeric', value)}
          keyboardType={'numeric'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Phone Pad"
          value={this.state.phonePad}
          onChangeText={value => this.handleTextChange('phonePad', value)}
          keyboardType={'phone-pad'}
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
  label: { fontWeight: 'bold' },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 3,
    marginRight: 3
  }
});
