import React from 'react';
import {
  View,
  Button,
  Alert,
  StyleSheet,
  Modal,
  Text,
  ToastAndroid
} from 'react-native';

export default class Modals extends React.Component {
  static navigationOptions = {
    title: 'Modals and Alerts'
  };

  state = {
    modalVisible: false
  };

  displayAlert = message => {
    Alert.alert('Alert title', message.toString());
  };

  displayTimeAlert = () => {
    Alert.alert('Current time alert', new Date().toLocaleTimeString());
  };

  displayMultiButtonAlert = () => {
    Alert.alert(
      'Multi-button alert',
      'Are you sure?',
      [
        {
          text: 'Ask me later',
          onPress: () => this.displayAlert('"Ask me later" was pressed')
        },
        {
          text: 'Cancel',
          onPress: () => this.displayAlert('"Cancel" was pressed')
        },
        { text: 'OK', onPress: () => this.displayAlert('"OK" was pressed') }
      ],
      { onDismiss: this.handleAlertDismissed }
    );
  };

  displayToast = () => {
    ToastAndroid.show('Toast is ready!', ToastAndroid.SHORT);
  };

  handleAlertDismissed = () => {
    this.displayAlert('Alert was dismissed by pressing "outside the box"');
  };

  setModalVisible = modalVisible => {
    this.setState({ modalVisible });
  };

  render() {
    return (
      <View>
        <View style={styles.row}>
          <Button onPress={this.displayTimeAlert} title="Display time alert" />
        </View>
        <View style={styles.row}>
          <Button
            onPress={this.displayMultiButtonAlert}
            title="Display multi-button alert"
          />
        </View>
        <View style={styles.row}>
          <Button title="Toast" onPress={this.displayToast} />
        </View>
        <View style={styles.row} />
        <Button title="Show Modal" onPress={() => this.setModalVisible(true)} />
        <Modal
          animationType="fade"
          visible={this.state.modalVisible}
          onRequestClose={() => this.displayAlert('Modal has been closed')}
        >
          <View>
            <Text>Modal</Text>
            <Button
              title="Hide Modal"
              onPress={() => this.setModalVisible(false)}
            />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 3
  }
});
