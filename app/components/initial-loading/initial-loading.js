import React, {View, ProgressBarAndroid} from 'react-native';

export default () => {
  return (
    <View style={styles}>
      <ProgressBarAndroid />
    </View>
  );
};

const styles = {
  padding: 50
};
