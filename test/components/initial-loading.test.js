import InitialLoading from '../../app/components/initial-loading/initial-loading';
import {ProgressBarAndroid} from 'react-native';
import {shallow} from 'enzyme';

describe('<InitialLoading />', () => {
  it('renders <ProgressBarAndroid />', () => {
    const component = shallow(<InitialLoading />);
    component.contains(<ProgressBarAndroid />).should.be.true;
  });
});
