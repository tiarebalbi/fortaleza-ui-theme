import React from 'react';
import PageWrapper from '../PageWrapper';
import { mount } from 'enzyme';

describe('ui/PageWrapper', () => {
  const wrapper = mount(<PageWrapper title="Page">a</PageWrapper>);

  it('should be stateless', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should hold description if present', () => {
    wrapper.setProps({ description: 'Sample Description' });
    expect(wrapper.find('p')).toHaveText('Sample Description');
  });

  it('should not have wrapper-content if children is undefined', () => {
    const local = mount(<PageWrapper title="Page" />);
    expect(local.find('div.wrapper-content')).not.toExist();
  });
});
