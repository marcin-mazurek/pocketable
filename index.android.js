import React, {AppRegistry, View, Component} from 'react-native';
import Application from './app/containers/application';
import fetchTimetables from './app/actions/fetch-timetables';

AppRegistry.registerComponent('PockeTable', () => Application);
fetchTimetables();
