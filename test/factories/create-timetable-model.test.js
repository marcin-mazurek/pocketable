import createTimetableModel from '../../app/factories/create-timetable-model';
import sinon from 'sinon';

describe('createTimetableModel', () => {
  let fakeTimer;

  before(() => {
    fakeTimer = sinon.useFakeTimers(new Date('2016-01-01T12:00:00').getTime());
  });

  after(() => {
    fakeTimer.restore();
  });

  it('maps TFL API response to departures model, sorted by departure time', () => {
    const apiResponse = [
      {
        // some API response fields ommited for brevity
        "towards": "West Ruislip",
        "expectedArrival": "2016-01-01T12:06:02.000Z",
        "currentLocation": "Approaching North Acton Junction",
        "platformName": "Westbound - Platform 1",
        "lineId": "central",
      },
      {
        "towards": "West Ruislip",
        "expectedArrival": "2016-01-01T12:03:00.000Z",
        "currentLocation": "Approaching Perivale",
        "platformName": "Westbound - Platform 1",
        "lineId": "central",
      }
    ];

    const viewModel = createTimetableModel(apiResponse, "central", "Westbound");

    viewModel.length.should.equal(2);
    viewModel[0].should.deep.equal({
      towards: "West Ruislip",
      minutesToArrival: 3,
      currentLocation: "Approaching Perivale"
    });
    viewModel[1].should.deep.equal({
      towards: "West Ruislip",
      minutesToArrival: 6,
      currentLocation: "Approaching North Acton Junction"
    });
  });

  it('ignores departures for different lines and directions (based on platform name) than given', () => {
    const apiResponse = [
      {
        // some API response fields ommited for brevity
        "currentLocation": "Approaching North Acton Junction",
        "expectedArrival": "2016-01-01T12:06:02.000Z",
        "lineId": "central",
        "towards": "West Ruislip",
        "platformName": "Westbound - Platform 1",
      },
      {
        "currentLocation": "Between South Ruislip and Northolt",
        "expectedArrival": "2016-01-01T12:03:00.000Z",
        "lineId": "central",
        "towards": "Epping",
        "platformName": "Eastbound - Platform 2", // different direction/platform
      },
      {
        "currentLocation": "Between South Ruislip and Northolt",
        "expectedArrival": "2016-01-01T12:03:00.000Z",
        "lineId": "metropolitan", // different line
        "towards": "Epping",
        "platformName": "Eastbound - Platform 2",
      }
    ];

    const viewModel = createTimetableModel(apiResponse, "central", "Westbound");

    viewModel.length.should.equal(1);
    viewModel[0].should.deep.equal({
      towards: "West Ruislip",
      minutesToArrival: 6,
      currentLocation: "Approaching North Acton Junction"
    });
  });

  it('returns an empty array when the response is empty', () => {
    const viewModel = createTimetableModel([], "central", "Northbound");
    viewModel.should.deep.equal([]);
  });

  it('returns an empty array when there is no departures for given line and direction', () => {
    const apiResponse = [{
      "currentLocation": "Between South Ruislip and Northolt",
      "expectedArrival": "2016-01-01T12:03:00.000Z",
      "lineId": "metropolitan", // different line
      "towards": "Epping",
      "platformName": "Eastbound - Platform 2", // different direction
    }];

    const viewModel = createTimetableModel(apiResponse, "central", "Northbound");
    viewModel.should.deep.equal([]);
  });

  let invalidParameters = [
    [null, "fakeStopID", "platform name"],
    [{}, "fakeStopID", "platform name"],
    [[], undefined, null],
    [[], "fakeStopID", []],
    [{}, "fakeStopID", []],
    [undefined, [], undefined]
  ];

  using(invalidParameters, (apiResponse, lineId, direction) => {
    it('throws an error when invalid parameters given', () => {
      (() => {
        createTimetableModel(apiResponse, lineId, direction);
      }).should.throw(/Invalid parameter/);
    });
  });
});
