import {UPDATE_STOP} from '../actions/action-names';
import config from '../config';
import {fromJS} from 'immutable';

const initialState = fromJS({ stops: config.stops });

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STOP:
      return state.setIn(
        ['stops', action.stopId, 'departures'],
        fromJS(action.data)
      );
  }
  
  return state;
};
