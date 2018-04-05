import React from 'react';
import Button from '../Button';
import { mount } from 'enzyme';

const clickMock = jest.fn();

describe('ui/Button', () => {
  const wrapper = mount(<Button onClick={clickMock} />);

  it('should be stateless', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should use default palette if not defined', () => {
    expect(
      wrapper
        .find('Button')
        .at(1)
        .prop('palette'),
    ).toBe('primary');
  });

  it('should match with send to internal component custom properties', () => {
    const localWrapper = mount(<Button loading={true} icon="user" />);
    expect(
      localWrapper
        .find('Button')
        .at(1)
        .prop('loading'),
    ).toBeTruthy();
    expect(
      localWrapper
        .find('Button')
        .at(1)
        .prop('icon'),
    ).toBe('user');
  });

  it('should simulate click', () => {
    wrapper
      .find('Button')
      .at(0)
      .simulate('click');
    expect(clickMock.mock.calls.length).toBe(1);
  });
});
