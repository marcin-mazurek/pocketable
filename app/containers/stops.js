import React, {Component} from 'react-native';
import StopList from '../components/stop-list/stop-list';
import {connect} from 'react-redux/native';

class Stops extends Component {
  render() {
    return <StopList {...this.props} />;
  }
}

export default connect(state => state.toJS())(Stops);
