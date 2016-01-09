import _ from 'lodash';

export default {
  createForPlatform (apiResponse, platformName) {
    if (!_.isArray(apiResponse)) {
      throw new Error("Invalid parameter - API response must be an array!");
    }
    if (!_.isString(platformName) || !platformName.length) {
      throw new Error("Invalid parameter - platform name must be non-empty string!");
    }

    const departuresFromGivenPlatform = _.filter(apiResponse, { platformName });

    return departuresFromGivenPlatform.map(departure => {
      return {
        towards: departure.towards,
        expectedArrival: departure.expectedArrival,
        currentLocation: departure.currentLocation
      };
    });
  }
};