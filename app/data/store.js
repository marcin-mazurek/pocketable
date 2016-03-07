import {createStore} from 'redux';
import {UPDATE_STOP} from '../actions/action-names';
import config from '../config';
import _ from 'lodash';

const initialState = { stops: config.stops };

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STOP:
      return {
        ...state,
        stops: {
          ...state.stops,
          [action.stopId]: {
            ...state.stops[action.stopId],
            departures: action.data
          }
        }
      };

    default:
      return state;
  }
};

export default createStore(reducer);
