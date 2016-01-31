import _ from 'lodash';
import moment from 'moment';

export default function(apiResponse, platformName) {
  if (!_.isArray(apiResponse)) {
    throw new Error("Invalid parameter - API response must be an array!");
  }
  if (!_.isString(platformName) || !platformName.length) {
    throw new Error("Invalid parameter - platform name must be non-empty string!");
  }

  const currentDate = moment();

  return _(apiResponse)
    .filter({ platformName })
    .sortBy('expectedArrival')
    .map(departure => {
      return {
        towards: departure.towards,
        minutesToArrival: moment(departure.expectedArrival).diff(currentDate, 'minutes'),
        currentLocation: departure.currentLocation
      };
    })
    .value();
};
