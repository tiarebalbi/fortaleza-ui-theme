import React from 'react';
import { Content, Layout } from '../Layout';
import { mount } from 'enzyme';

describe('Layout', () => {
  describe('Content', () => {
    const wrapper = mount(<Content>Sample</Content>);

    it('should be stateless', () => {
      expect(wrapper.instance()).toBeNull();
    });

    it('should be able to match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Layout', () => {
    const wrapper = mount(<Layout>Sample</Layout>);

    it('should be stateless', () => {
      expect(wrapper.instance()).toBeNull();
    });

    it('should be able to match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
