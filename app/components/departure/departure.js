import React, {
  View,
  Text,
  Component,
  PropTypes,
  StyleSheet
} from 'react-native';
import styles from './departure.styles.js';

export default class Departure extends Component {
  static propTypes = {
    towards: PropTypes.string.isRequired,
    minutesToArrival: PropTypes.number.isRequired,
    currentLocation: PropTypes.string.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Text style={styles.towards}>
            {this.props.towards}
          </Text>
          <Text style={styles.currentLocation}>
            ({this.props.currentLocation})
          </Text>
        </View>
        <View>
          <Text>
            <Text style={styles.minutesToArrival}>
              {this.props.minutesToArrival}
            </Text>
            {' '}
            min
          </Text>
        </View>
      </View>
    );
  }
}
