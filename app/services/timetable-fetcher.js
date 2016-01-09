import fetch from 'node-fetch';

export default {
  fetch (stopId) {
    return fetch(`https://api.tfl.gov.uk/StopPoint/${stopId}/Arrivals`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("TFL API request failed");
        }

        return response.json();
      });
  }
};