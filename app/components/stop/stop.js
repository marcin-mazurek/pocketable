import React, {PullToRefreshViewAndroid, ScrollView} from 'react-native';
import DepartureList from '../departure-list/departure-list';
import StationName from '../station-name/station-name';
import LineName from '../line-name/line-name';
import fetchTimetables from '../../actions/fetch-timetables';

export default ({ name, line, background, departures }) => {
  return (
    <PullToRefreshViewAndroid
      refreshing={false}
      onRefresh={fetchTimetables}>
      <ScrollView>
        <StationName name={name} />
        <LineName name={line} background={background} />
        <DepartureList departures={departures} />
      </ScrollView>
    </PullToRefreshViewAndroid>
  );
};
