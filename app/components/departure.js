import React, {View, Text, Component, PropTypes} from 'react-native';

export default class Departure extends Component {
  static propTypes = {
    towards: PropTypes.string.isRequired,
    minutesToArrival: PropTypes.number.isRequired,
    currentLocation: PropTypes.string.isRequired
  };
  
  render() {
    return (<View style={{marginLeft: 15,
      marginRight: 15,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 15,
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: 'DEDEDE'}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 2.5}}>
          <Text style={{fontSize: 22}}>{this.props.towards}</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{textAlign: 'right', fontSize: 13}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              {this.props.minutesToArrival}
            </Text> min
          </Text>
        </View>
      </View>
      <Text style={{fontSize: 13, color: '999999'}}>
        ({this.props.currentLocation})
      </Text>
    </View>);
  }
}
