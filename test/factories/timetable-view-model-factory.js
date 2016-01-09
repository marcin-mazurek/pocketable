import TimetableViewModelFactory from '../../app/factories/timetable-view-model-factory';
import apiResponse from '../fixtures/api-responses/stop-point-490011297S-arrivals';

describe('TimetableViewModelFactory', () => {
  it('maps TFL API response to view model', () => {
    const viewModel = TimetableViewModelFactory.createForPlatform(
      apiResponse, "Westbound - Platform 1");

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
});