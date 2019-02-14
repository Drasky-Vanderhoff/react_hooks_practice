import React from 'react';
import { shallow } from 'enzyme';
import ColorBox from 'components/ColorBox';

it('renders without crashing', () => {
  shallow(<ColorBox />);
});