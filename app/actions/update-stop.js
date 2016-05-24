import store from '../data/store';
import fetchTimetable from '../services/fetch-timetable';
import createTimetableModel from '../factories/create-timetable-model';
import {UPDATE_STOP} from './action-names';

export default async function updateStop(stopId, lineId, direction) {
  const apiResponse = await fetchTimetable(stopId);

  store.dispatch({
    type: UPDATE_STOP,
    stopId: stopId,
    data: createTimetableModel(apiResponse, lineId, direction)
  });
}
