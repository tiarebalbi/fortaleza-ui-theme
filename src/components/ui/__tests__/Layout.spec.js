import React from 'react';
import { Content, Layout, Details } from '../Layout';
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
  describe('Details', () => {
    const wrapper = mount(<Details>Sample</Details>);

    it('should be stateless', () => {
      expect(wrapper.instance()).toBeNull();
    });

    it('should be able to match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should be able to find by class', () => {
      expect(wrapper.find('.details')).toExist();
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
