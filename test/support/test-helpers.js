import React from './mocked-react';
import TestUtils from 'react-addons-test-utils';

const renderer = TestUtils.createRenderer();

export function renderShallow(component) {
  renderer.render(component);
  return renderer.getRenderOutput();
}
