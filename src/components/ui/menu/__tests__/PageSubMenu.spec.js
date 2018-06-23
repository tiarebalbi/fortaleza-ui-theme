import React from 'react';
import { TopNavMenu } from '../index';
import { mount } from 'enzyme';
import PageSubMenu from '../PageSubMenu';

const setup = (props = {}) => {
  return mount(<PageSubMenu {...props} />);
};

describe('ui/PageSubMenu', () => {
  const wrapper = setup({ title: 'Home' });

  it('should be stateful', () => {
    expect(wrapper.instance()).not.toBeNull();
  });

  it('should be able to match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to render description', () => {
    wrapper.setProps({
      description: 'Sample Description',
    });

    expect(wrapper.find('p')).toHaveText('Sample Description');
  });

  it('should be able to render link', () => {
    wrapper.setProps({
      link: {
        name: 'Custom Button',
        link: '/',
      },
    });

    expect(wrapper.find('a.btn-sub-menu-page span')).toHaveText(
      'Custom Button',
    );
  });
});
