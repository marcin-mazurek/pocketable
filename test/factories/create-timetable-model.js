import createTimetableModel from '../../app/factories/create-timetable-model';
import apiResponse from '../fixtures/api-responses/stop-point-490011297S-arrivals';

describe('createTimetableModel', () => {
  it('maps TFL API response to view model', () => {
    const viewModel = createTimetableModel(apiResponse, "Westbound - Platform 1");

    viewModel.length.should.equal(2);
    viewModel[0].should.deep.equal({
      towards: "West Ruislip",
      expectedArrival: "2016-01-09T13:57:05.028Z",
      currentLocation: "Approaching Perivale"
    });
    viewModel[1].should.deep.equal({
      towards: "West Ruislip",
      expectedArrival: "2016-01-09T14:01:05.044Z",
      currentLocation: "Approaching North Acton Junction"
    });
  });

  it('returns an empty array when there is no departures for given platform', () => {
    const viewModel = createTimetableModel(apiResponse,
      "In-the-middle-of-nowhere-bound - Platform 9 3/4");
    viewModel.should.deep.equal([]);
  });

  let invalidParameters = [
    [null, "platform name"],
    [{}, "platform name"],
    [apiResponse, null],
    [apiResponse, []],
    [{}, []],
    [undefined, undefined]
  ];

  using(invalidParameters, (apiResponse, platformName) => {
    it('throws an error when invalid parameters given', () => {
      (() => {
        createTimetableModel(apiResponse, platformName);
      }).should.throw(/Invalid parameter/);
    });
  });
});
