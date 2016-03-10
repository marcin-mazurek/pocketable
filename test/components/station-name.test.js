import {shallow} from 'enzyme';
import StationName from '../../app/components/station-name/station-name';

describe('<StationName />', () => {
  it('renders uppercased station name', () => {
    const component = shallow(<StationName name="Oxford Circus" />);
    component.contains('OXFORD CIRCUS').should.be.true;
  });
});
