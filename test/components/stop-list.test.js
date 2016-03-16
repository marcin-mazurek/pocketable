import {shallow} from 'enzyme';
import StopList from '../../app/components/stop-list/stop-list';
import Stop from '../../app/components/stop/stop';

describe('<StopList />', () => {
  it('render <Stop /> component for each stop', () => {
    const component = shallow(
      <StopList stops={{
        'STOPID1': { name: 'Oxford Circus', line: 'Central', background: '#EEEEEE', departures: ['departure1'] },
        'STOPID2': { name: 'Regents Park', line: 'Bakerloo', background: '#DDDDDD', departures: ['departure2'] }
      }} />
    );

    component.children().should.have.length(2);
    component.contains(
      <Stop name="Oxford Circus"
        line="Central"
        background="#EEEEEE"
        departures={['departure1']} />
    ).should.be.true;
    component.contains(
      <Stop name="Regents Park"
        line="Bakerloo"
        background="#DDDDDD"
        departures={['departure2']} />
    ).should.be.true;
  });
});
