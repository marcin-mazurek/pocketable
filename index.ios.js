'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text
} = React;

var PockeTable = React.createClass({
  render: function() {
    return (
      <Text>iOS version yet available</Text>
    );
  }
});

AppRegistry.registerComponent('PockeTable', () => PockeTable);
