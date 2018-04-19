import React from 'react';
import { mount } from 'enzyme';
import Table from '../../ui/Table';

describe('ui/Table', () => {
  const wrapper = mount(
    <Table columns={[{ title: 'Name', dataIndex: 'name' }]} dataSource={[]} />,
  );

  it('should be stateless', () => {
    expect(wrapper.instance()).toBeNull();
  });

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should cascade properties', () => {
    wrapper.setProps({ size: 'middle' });
    expect(
      wrapper
        .find('Table')
        .at(2)
        .prop('size'),
    ).toBe('middle');
  });
});
