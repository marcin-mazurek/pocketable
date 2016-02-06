import React, {
  PullToRefreshViewAndroid,
  ScrollView,
  View,
  Text,
  Component,
  ProgressBarAndroid
} from 'react-native';
import Departure from './departure/departure';
import fetchTimetables from '../actions/fetch-timetables';

export default class Departures extends Component {
  render() {
    return (
      <PullToRefreshViewAndroid
        refreshing={false}
        onRefresh={fetchTimetables}>
        <ScrollView>
          {this.renderDepartures()}
        </ScrollView>
      </PullToRefreshViewAndroid>
    );
  }

  renderDepartures() {
    if (typeof this.props.departures === 'undefined') {
      return (<View style={{flex: 1,
        paddingTop: 170,
        height: 300,
        backgroundColor: 'transparent'}}>
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
