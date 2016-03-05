import React, {View, Text} from 'react-native';
import styles from './station-name.styles.js';

export default ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name.toUpperCase()}
      </Text>
    </View>
  );
};
