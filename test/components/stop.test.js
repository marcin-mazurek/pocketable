import Stop from '../../app/components/stop/stop';
import StationName from '../../app/components/station-name/station-name';
import LineName from '../../app/components/line-name/line-name';
import DepartureList from '../../app/components/departure-list/departure-list';
import fetchTimetables from '../../app/actions/fetch-timetables';
import {shallow} from 'enzyme';

describe('<Stop />', () => {
  describe('rendering', () => {
    it('renders <StationName />', () => {
      const component = renderComponent({ name: 'Oxford Circus' });

      component.contains(<StationName name="Oxford Circus" />)
        .should.be.true;
    });

    it('renders <LineName />', () => {
      const component = renderComponent({
        line: 'Central',
        background: '#DDDDDD'
      });

      component.contains(
        <LineName name="Central" background="#DDDDDD" />
      ).should.be.true;
    });

    it('renders <DepartureList />', () => {
      const component = renderComponent({
        departures: [ 'departure1', 'departure2' ]
      });

      component.contains(
        <DepartureList departures={[ 'departure1', 'departure2' ]} />
      ).should.be.true;
    });
  });

  describe('user interactions', () => {
    it('allows to swipe down to refresh the timetable', () => {
      const component = renderComponent();

      component.find('PullToRefreshViewAndroid')
        .prop('onRefresh')
        .should.equal(fetchTimetables);
    });
  });
});

function renderComponent(options = {}) {
  const props = {
    name: 'Oxford Circus',
    line: 'Central',
    background: '#DDDDDD',
    departures: [ 'departure1', 'departure2' ],
    ...options
  };

  return shallow(<Stop {...props} />);
}
