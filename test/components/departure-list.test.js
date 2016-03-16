import {shallow} from 'enzyme';
import DepartureList from '../../app/components/departure-list/departure-list';
import InitialLoading from '../../app/components/initial-loading/initial-loading';
import NoDepartures from '../../app/components/no-departures/no-departures';
import Departure from '../../app/components/departure/departure';

describe('<DepartureList />', () => {
  it('renders <InitialLoading /> when departures are not loaded yet (are undefined)', () => {
    const component = shallow(<DepartureList departures={undefined} />);
    component.contains(<InitialLoading />).should.be.true;
  });

  it('renders <NoDepartures /> when there is no departures', () => {
    const component = shallow(<DepartureList departures={[]} />);
    component.contains(<NoDepartures />).should.be.true;
  });

  it('renders <Departure /> component for each departure', () => {
    const component = shallow(
      <DepartureList departures={[
        { towards: 'Epping', currentLocation: 'South Ruislip', minutesToArrival: 3 },
        { towards: 'Woodford', currentLocation: 'Rusilip Gardens', minutesToArrival: 5 }
      ]} />
    );

    component.children().should.have.length(2);
    component.contains(
      <Departure towards="Epping" currentLocation="South Ruislip" minutesToArrival={3} />
    ).should.be.true;
    component.contains(
      <Departure towards="Woodford" currentLocation="Rusilip Gardens" minutesToArrival={5} />
    ).should.be.true;
  });
});
