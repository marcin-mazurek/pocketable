import fetchTimetable from '../../app/services/fetch-timetable';
import nock from 'nock';

describe('fetchTimetable', () => {
  it('fetches timetable for given stop', async () => {
    const responseBody = { some: 'response_data' };

    nock('https://api.tfl.gov.uk')
      .get(`/StopPoint/12345/Arrivals`)
      .reply(200, responseBody);

    const response = await fetchTimetable('12345');
    response.should.deep.equal(responseBody);
  });

  it('throws an error when request failed', async () => {
    nock('https://api.tfl.gov.uk')
      .get(`/StopPoint/SomeInvalidStop/Arrivals`)
      .reply(500);

    try {
      await fetchTimetable('SomeInvalidStop');
      throw new Error('Expected function to throw an error');
    }
    catch (error) {
      error.message.should.equal('TFL API request failed');
    }
  });
});
