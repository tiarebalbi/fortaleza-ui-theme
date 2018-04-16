import React from 'react';
import { TopNavMenu } from '../index';
import { mount } from 'enzyme';

const setup = (props = {}) => {
  return mount(<TopNavMenu {...props} />);
};

describe('ui/TopNavMenu', () => {
  const wrapper = setup();

  it('should be stateful', () => {
    expect(wrapper.instance()).not.toBeNull();
  });

  it('should have by default closed class on options', () => {
    expect(wrapper.find('.options')).toHaveClassName('closed');
  });

  it('should simulate menu toggle', () => {
    wrapper.find('a.toggle').simulate('click');
    expect(wrapper.find('.options')).toHaveClassName('open');
  });
});
