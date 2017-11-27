import React from 'react';
import { View, WebView, ActivityIndicator } from 'react-native';

export default class WebViewComponent extends React.Component {
  static navigationOptions = {
    title: 'Web View'
  };

  state = {
    isLoading: true
  };

  handleWebViewLoaded = () => this.setState({ isLoading: false });

  render() {
    const { isLoading } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {isLoading && <ActivityIndicator />}
        <WebView
          source={{
            uri: 'https://github.com/BrianSchroer/learning-react-native'
          }}
          style={{ flex: 1 }}
          onLoad={this.handleWebViewLoaded}
        />
      </View>
    );
  }
}
