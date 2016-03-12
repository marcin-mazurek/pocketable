import React, { View, Text } from 'react-native';
import styles from './departure.styles.js';

export default ({ towards, currentLocation, minutesToArrival }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={styles.towards} testID="direction">
          {towards}
        </Text>
        <Text style={styles.currentLocation} testID="currentLocation">
          ({currentLocation})
        </Text>
      </View>
      <View>
        <Text>
          <Text style={styles.minutesToArrival} testID="minutesToArrival">
            {minutesToArrival}
          </Text>
          {' '}
          min
        </Text>
      </View>
    </View>
  );
};
