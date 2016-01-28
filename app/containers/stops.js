import React, {View, Component, ViewPagerAndroid, ProgressBarAndroid} from 'react-native';
import StopsPager from '../components/stops-pager';
import {connect} from 'react-redux/native';
import _ from 'lodash'

class Stops extends Component {
  render () {
    return <StopsPager {...this.props} />;
  }
}

export default connect(state => state)(Stops);
