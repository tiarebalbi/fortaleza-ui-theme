import React from 'react';
import { mount } from 'enzyme';
import SideView from '../../ui/SideView';

const close = jest.fn();

describe('ui/SideView', () => {
  const Component = () => <div>a</div>;
  const wrapper = mount(
    <SideView title="Custom View" close={close} component={Component} />,
  );

  beforeEach(() => close.mockClear());

  it('should be stateless', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should execute close function clicking on the top right button', () => {
    wrapper.find('.space').simulate('click');
    expect(close.mock.calls.length).toBe(1);
  });

  it('should execute close function clicking on blur background', () => {
    wrapper.find('header a').simulate('click');
    expect(close.mock.calls.length).toBe(1);
  });
});
