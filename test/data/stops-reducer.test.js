import stopsReducer from '../../app/data/stops-reducer';
import config from '../../app/config';
import {UPDATE_STOP} from '../../app/actions/action-names';
import {fromJS} from 'immutable';

describe('stopsReducer', () => {
  it('has initial state fetched from the config file', () => {
    const initialState = stopsReducer(undefined, {});
    initialState.should.equal(fromJS({ stops: config.stops }));
  });

  it('handles UPDATE_STOP', () => {
    const initialState = fromJS({
      stops: {
        STOP_12345: {
          departures: ['dep1', 'dep2']
        }
      }
    });
    const action = { type: UPDATE_STOP, stopId: 'STOP_12345', data: ['dep2', 'dep3'] };
    const nextState = stopsReducer(initialState, action);

    nextState.should.equal(fromJS({
      stops: {
        STOP_12345: {
          departures: ['dep2', 'dep3']
        }
      }
    }));
  });
});
