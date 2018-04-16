import React from 'react';
import { SideNavMenu } from '../index';
import { mount } from 'enzyme';

const setup = (props = {}) => {
  return mount(<SideNavMenu {...props} />);
};

describe('ui/SideNavMenu', () => {
  const wrapper = setup();

  it('should be stateful', () => {
    expect(wrapper.instance()).toBeNull();
  });
});
