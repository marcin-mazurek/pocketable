import updateStop from './update-stop';
import config from '../config';
import { forEach } from 'lodash';

export default function() {
  forEach(config.stops, (stop, stopId) => {
    updateStop(stopId, stop.lineId, stop.direction);
  });
}
