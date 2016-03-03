import React, { View, Text } from 'react-native';
import styles from './departure.styles.js';

export default ({ towards, currentLocation, minutesToArrival }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={styles.towards}>
          {towards}
        </Text>
        <Text style={styles.currentLocation}>
          ({currentLocation})
        </Text>
      </View>
      <View>
        <Text>
          <Text style={styles.minutesToArrival}>
            {minutesToArrival}
          </Text>
          {' '}
          min
        </Text>
      </View>
    </View>
  );
};
