import React from 'react';
import { shallow } from 'enzyme';
import ColorTextPresenter from 'components/ColorTextPresenter';

it('renders without crashing', () => {
  shallow(<ColorTextPresenter />);
});