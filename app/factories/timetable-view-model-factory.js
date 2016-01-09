import _ from 'lodash';

export default {
  createForPlatform (apiResponse, platformName) {
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