import React, {Component, View} from 'react-native';
import Stops from './stops';
import store from '../data/store';

export default class Application extends Component {
  render () {
    return (
      <Stops store={store} />
    );
  }
}
