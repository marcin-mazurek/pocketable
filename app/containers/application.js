import React, {Component} from 'react-native';
import Stops from './stops';
import store from '../data/store';

export default () => {
  return (
    <Stops store={store} />
  );
}
