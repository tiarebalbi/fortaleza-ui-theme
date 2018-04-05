import * as React from 'react';
import { shallow } from 'enzyme';

import Form from '../Form';

describe('Form', () => {
  const wrapper = shallow(<Form />);

  it('should be stateless', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should build component using default properties', () => {
    expect(wrapper.props().layout).toBe('vertical');
  });

  it('should build component with custom layout', () => {
    const localWrapper = shallow(<Form layout="inline" />);
    expect(localWrapper.props().layout).toBe('inline');
  });
});
