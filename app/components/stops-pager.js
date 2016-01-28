import React, {View, Component, ViewPagerAndroid} from 'react-native';
import Timetable from './timetable';
import _ from 'lodash';

export default class StopsPager extends Component {
  render () {
    const stops = _.map(this.props.stops, (timetableData, index) => {
      return <Timetable {...timetableData} key={`Timetable_${index}`}/>;
    });

    return (
      <ViewPagerAndroid style={{flex: 1}} initialPage={0}>
        {stops}
      </ViewPagerAndroid>
    );
  }
}

StopsPager.propTypes = {
  stops: React.PropTypes.object.isRequired
};
