import React from 'react';
import { Animated, Text } from 'react-native';

export default class AnimatedComponent extends React.Component {
  static navigationOptions = {
    title: 'Animated API'
  };

  state = {
    fadeAnimation: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.timing(this.state.fadeAnimation, {
      toValue: 1,
      duration: 10000
    }).start();
  }

  render() {
    const { fadeAnimation } = this.state;
    return (
      <Animated.View
        style={{
          padding: 30,
          backgroundColor: 'blue',
          opacity: fadeAnimation
        }}
      >
        <Text style={{ color: 'white' }}>Fade in</Text>
      </Animated.View>
    );
  }
}
