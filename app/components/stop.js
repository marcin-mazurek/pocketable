import React, {View, Text, Component, PropTypes} from 'react-native';
import Departures from './departures';

export default class Stop extends Component {
  static propTypes = {
    background: PropTypes.string.isRequired,
    line: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    return (<View collapsable={false}>
      <View style={{flex: 1, padding: 10, backgroundColor: '000099'}}>
        <Text style={{fontSize: 32, textAlign: 'center', color: 'FFFFFF', fontWeight: 'bold'}}>
          {this.props.name.toUpperCase()}
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
      <Departures departures={this.props.departures} />
    </View>);
  }
}
