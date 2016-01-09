'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  ProgressBarAndroid,
  View
} = React;

var PockeTable = React.createClass({
  render: function() {
    return (<View style={styles.container}>
      <ProgressBarAndroid />
    </View>)
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('PockeTable', () => PockeTable);
