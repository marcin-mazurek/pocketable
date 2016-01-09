import TimetableFetcher from '../../app/services/timetable-fetcher';
import successAPIResponseBody from '../fixtures/api-responses/stop-point-490011297S-arrivals';
import nock from 'nock';

const stopId = '490011297S';

describe('TimetableFetcher', () => {
  it('fetches timetable for given stop', done => {
    prepareSuccessAPIResponse();

    TimetableFetcher
      .fetch(stopId)
      .then(response => {
        response.should.deep.equal(successAPIResponseBody);
        done();
      }, done);
  });

  it('rejects response when request failed', done => {
    prepareFailAPIResponse();

    TimetableFetcher
      .fetch(stopId)
      .then(() => {
          done("Expected promise to be rejected.");
        },
        err => {
          err.message.should.equal('TFL API request failed');
          done();
        });
  });
});

function prepareSuccessAPIResponse() {
  nock('https://api.tfl.gov.uk')
    .get(`/StopPoint/${stopId}/Arrivals`)
    .reply(200, successAPIResponseBody);
}

function prepareFailAPIResponse() {
  nock('https://api.tfl.gov.uk')
    .get(`/StopPoint/${stopId}/Arrivals`)
    .reply(500);
}