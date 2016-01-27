import store from '../data/store';
import fetchTimetable from '../services/fetch-timetable';
import createTimetableModel from '../factories/create-timetable-model';
import {UPDATE_STOP} from './action-names';

export default function updateStop(stopId, platform, data) {
  fetchTimetable(stopId)
    .then(function (apiResponse) {
      store.dispatch({
        type: UPDATE_STOP,
        stopId: stopId,
        data: createTimetableModel(apiResponse, platform)
      });
    });
}
