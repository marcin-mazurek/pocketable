import React, {ViewPagerAndroid} from 'react-native';
import Stop from '../stop/stop';
import {map} from 'lodash';

export default ({ stops }) => {
  return (
    <ViewPagerAndroid style={styles}>
      {renderStops(stops)}
    </ViewPagerAndroid>
  );
}

const renderStops = (stops) => {
  return map(stops,
    stop => <Stop {...stop} key={`Stop_${stop.name}`}/>
  );
};

const styles = {
  flex: 1
};
