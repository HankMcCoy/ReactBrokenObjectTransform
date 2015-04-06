/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var func = () => {};

var obj = {
  // This causes "SyntaxError: Unexpected token ["
  ['foo']: 'bar'
};

var ReactBrokenObjectTransform = React.createClass({
  render: () => {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          Cmd+Control+Z to bring up Dev tools, then click Enable Debugging
        </Text>
      </View>
    );
 }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});

AppRegistry.registerComponent('ReactBrokenObjectTransform', () => ReactBrokenObjectTransform);
