import NoDepartures from '../../app/components/no-departures/no-departures';
import {shallow} from 'enzyme';

describe('<NoDepartures />', () => {
  it('renders "No departures" text', () => {
    const component = shallow(<NoDepartures />);
    component.contains('No departures').should.be.true;
  });
});
