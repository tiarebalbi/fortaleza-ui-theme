import React from 'react';
import { mount } from 'enzyme';

import MenuItem from '../MenuItem';

const setup = (props = {}) => {
  return mount(<MenuItem href="/" {...props} />);
};

describe('ui/MenuItem', () => {
  const wrapper = setup();
  it('should be stateless', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to sent an icon', () => {
    wrapper.setProps({ icon: 'user' });
    expect(wrapper.find('i')).toExist();
  });

  it('should be able to set a custom text', () => {
    wrapper.setProps({ text: 'Button' });
    expect(wrapper.find('span')).toHaveText('Button');
  });
});
