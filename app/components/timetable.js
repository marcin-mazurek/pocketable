import React, {View, Text, Component, ProgressBarAndroid} from 'react-native';
import Departure from './departure';

export default class Timetable extends Component {
  render() {
    return (<View collapsable={false}>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 32, textAlign: 'center'}}>
            {this.props.name}
        </Text>
      </View>
      <View style={{backgroundColor: this.props.background, padding: 10}}>
        <Text style={{fontSize: 16,
          fontWeight: 'bold',
          color: 'FFFFFF',
          textAlign: 'center'}}>
            {this.props.line.toUpperCase()}
        </Text>
      </View>
      {this.renderDepartures()}
    </View>);
  }
  renderDepartures() {
    if (typeof this.props.departures === 'undefined') {
      return (<View style={{marginTop: 170}}>
        <ProgressBarAndroid />
      </View>);
    }
    else if (!this.props.departures.length) {
      return (<Text style={{fontSize: 21, textAlign: 'center', marginTop: 210}}>
        No departures
      </Text>);
    }

    return this.props.departures.map(
      (departure, index) => <Departure {...departure} key={`departures_${index}`} />
    );
  }
}
