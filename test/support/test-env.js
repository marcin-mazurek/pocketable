// Mutates `react-native` package require cache
// Allows for native components unit testing in Node.js environment
require('react-native-mock/mock');

// Exposes React - required implicitly by Enzyme
global.React = require('react');

// Makes Chai's should-style assertions available globally
var chai = require('chai');
chai.should();

// Add assertions for Immutable
var chaiImmutable = require('chai-immutable');
chai.use(chaiImmutable);

// Adds utility for parametrized tests globally
global.using = require('jasmine-data-provider');

// Node.js polyfill for fetch API available in React Native
global.fetch = require('isomorphic-fetch');

require("babel-polyfill");
