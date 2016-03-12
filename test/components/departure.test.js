import Departure from '../../app/components/departure/departure';
import {shallow} from 'enzyme';

describe('<Departure />', () => {
  it('renders direction', () => {
    const component = shallow(<Departure towards="West Ruislip" />);

    component.find('[testID="direction"]')
      .prop('children')
      .should.equal('West Ruislip');
  });

  it('renders current location', () => {
    const component = shallow(<Departure currentLocation="Greenford" />);

    component.find('[testID="currentLocation"]')
      .prop('children')
      .should.contain('Greenford')
  });

  it('renders minutes to arrival', () => {
    const component = shallow(<Departure minutesToArrival={12} />);

    component.find('[testID="minutesToArrival"]')
      .prop('children')
      .should.equal(12);
  });
});
