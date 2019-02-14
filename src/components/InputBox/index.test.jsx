import React from 'react';
import { shallow } from 'enzyme';
import InputBox from 'components/InputBox';

it('renders without crashing', () => {
  shallow(<InputBox />);
});