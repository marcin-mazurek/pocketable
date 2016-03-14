import {shallow} from 'enzyme';
import LineName from '../../app/components/line-name/line-name';

describe('<LineName />', () => {
  it('renders uppercased line name', () => {
    const component = shallow(<LineName name="Central line" />);
    component.contains('CENTRAL LINE').should.be.true;
  });
});
