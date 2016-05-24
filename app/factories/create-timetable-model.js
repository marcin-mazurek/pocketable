import _ from 'lodash';
import moment from 'moment';

export default function(apiResponse, lineId, direction) {
  if (!_.isArray(apiResponse)) {
    throw new Error("Invalid parameter - API response must be an array!");
  }
  if (!_.isString(lineId) || !lineId.length) {
    throw new Error("Invalid parameter - lineId must be a non-empty string!");
  }
  if (!_.isString(direction) || !direction.length) {
    throw new Error("Invalid parameter - direction must be a non-empty string!");
  }

  const currentDate = moment();

  return _(apiResponse)
    .filter(departure => departure.platformName.includes(direction))
    .filter(departure => departure.lineId === lineId)
    .sortBy('expectedArrival')
    .map(departure => ({
      towards: departure.towards,
      minutesToArrival: moment(departure.expectedArrival).diff(currentDate, 'minutes'),
      currentLocation: departure.currentLocation
    }))
    .value();
};
