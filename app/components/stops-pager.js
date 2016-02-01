import React, {View, Component, ViewPagerAndroid, PropTypes} from 'react-native';
import Stop from './stop';
import _ from 'lodash';

export default class StopsPager extends Component {
  static propTypes = {
    stops: PropTypes.object.isRequired
  };

  render () {
    const stops = _.map(this.props.stops, (timetableData, index) => {
      return <Stop {...timetableData} key={`Timetable_${index}`}/>;
    });

    return (
      <ViewPagerAndroid style={{flex: 1}} initialPage={0}>
        {stops}
      </ViewPagerAndroid>
    );
  }
}
