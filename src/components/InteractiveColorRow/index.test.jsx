import React from 'react';
import { mount } from 'enzyme';
import config from 'config.json';
import InteractiveColorRow from 'components/InteractiveColorRow';
import ColorBox from 'components/ColorBox';

it('renders without crashing', () => {
  mount(<InteractiveColorRow />);
});

it('should be able to select a single color when multipleSelections is false', () => {
  const setSelectionColor = jest.fn();
  const wrapper = mount(
    <InteractiveColorRow 
      colorBoxes={config.availableColorPairs} 
      onSelectedColorRow={setSelectionColor}
      descriptionText={config.selectorDescriptionText}
      multipleSelections={false}
    />
  );
  // First one is highlighted
  expect(wrapper.find(ColorBox).first().props().isHighlighted).toBe(true);
  wrapper.find("li").at(config.availableColorPairs.length -1).simulate('click');
  // HACK: Needs to be trigger twice since useEffect is also trigger during componentDidMount
  // but enzyme doesn't handle this well. https://github.com/airbnb/enzyme/issues/2011
  wrapper.find("li").at(config.availableColorPairs.length -1).simulate('click');
  expect(setSelectionColor).toHaveBeenCalledWith([
    config.availableColorPairs[config.availableColorPairs.length -1].background
  ]);
  expect(wrapper.find(ColorBox).first().props().isHighlighted).toBe(false);
  expect(wrapper.find(ColorBox).last().props().isHighlighted).toBe(true);
});

it('should be able to select multiple colors when multipleSelections is true', () => {
  const setSelectionColor = jest.fn();
  const wrapper = mount(
    <InteractiveColorRow 
      colorBoxes={config.availableColorPairs} 
      onSelectedColorRow={setSelectionColor}
      descriptionText={config.selectorDescriptionText}
      multipleSelections={true}
    />
  );
  // First one is highlighted
  expect(wrapper.find(ColorBox).first().props().isHighlighted).toBe(true);
  
  wrapper.find("li").at(config.availableColorPairs.length -1).simulate('click');
  // HACK: Needs to be trigger twice since useEffect is also trigger during componentDidMount
  // but enzyme doesn't handle this well. https://github.com/airbnb/enzyme/issues/2011
  wrapper.find("li").at(config.availableColorPairs.length -1).simulate('click');
  wrapper.find("li").at(config.availableColorPairs.length -1).simulate('click');
  expect(setSelectionColor).toHaveBeenCalledWith([
    config.availableColorPairs[0].background,
    config.availableColorPairs[config.availableColorPairs.length -1].background
  ]);
  expect(wrapper.find(ColorBox).first().props().isHighlighted).toBe(true);
  expect(wrapper.find(ColorBox).last().props().isHighlighted).toBe(true);
});