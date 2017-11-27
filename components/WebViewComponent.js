import React from 'react';
import { WebView } from 'react-native';

export default class WebViewComponent extends React.Component {
  static navigationOptions = {
    title: 'Web View'
  };

  state = {};

  render() {
    return (
      <WebView
        source={{
          uri: 'https://github.com/BrianSchroer/learning-react-native'
        }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
