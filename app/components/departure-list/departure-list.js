import React, {View} from 'react-native';
import Departure from '../departure/departure';
import InitialLoading from '../initial-loading/initial-loading';
import NoDepartures from '../no-departures/no-departures';

export default ({ departures }) => {
  return (
    <View style={styles}>
      {renderList(departures)}
    </View>
  );
};

const renderList = (departures) => {
  if (departures === undefined) {
    return <InitialLoading />;
  }
  else if (!departures.length) {
    return <NoDepartures />;
  }
  else {
    return departures.map(
      (departure, index) => <Departure {...departure} key={`departures_${index}`} />
    );
  }
};

const styles = {
  flex: 1
};
