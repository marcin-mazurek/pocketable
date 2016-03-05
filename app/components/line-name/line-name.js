import React, {View, Text} from 'react-native';
import {getContainerStyles, textStyles} from './line-name.styles.js';

export default ({ background, name }) => {
  return (
    <View style={getContainerStyles(background)}>
      <Text style={textStyles}>
        {name.toUpperCase()}
      </Text>
    </View>
  );
};
