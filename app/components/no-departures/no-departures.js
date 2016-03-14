import React, {View, Text} from 'react-native';

export default () => {
  return (
    <View style={styles.singleElementContainer}>
      <Text style={styles.singleElementText}>
        No departures
      </Text>
    </View>
  );
};

const styles = {
  singleElementContainer: {
    paddingTop: 50
  },
  singleElementText: {
    fontSize: 21,
    textAlign: 'center'
  }
};
