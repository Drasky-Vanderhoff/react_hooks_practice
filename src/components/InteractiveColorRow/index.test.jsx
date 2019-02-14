import React from 'react';
import { shallow } from 'enzyme';
import InteractiveColorRow from 'components/InteractiveColorRow';

it('renders without crashing', () => {
  shallow(<InteractiveColorRow />);
});