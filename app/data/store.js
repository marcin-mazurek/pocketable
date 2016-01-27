import {createStore} from 'redux';
import {UPDATE_STOP} from '../actions/action-names';
import _ from 'lodash';

const initialState = {
  stops: {
    '940GZZLUNHT': { name: 'Northolt', line: 'Central line', background: 'E32017' },
    '940GZZLURGP': { name: `Regent's Park`, line: 'Bakerloo line', background: 'B36305' },
    '940GZZLUOXC': { name: 'Oxford Circus', line: 'Central line', background: 'E32017' }
  }
};

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
