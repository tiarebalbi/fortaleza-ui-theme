import * as React from 'react';
import { palette } from 'styled-theme';
import { mount } from 'enzyme';
import styled from 'styled-components';
import theme from '../default';
import toJson from 'enzyme-to-json';

const Main = styled.section`
  padding: 4em;
  background: ${palette(0)({ theme: theme, palette: 'primary' })};
`;

const setup = () => {
  return <Main />;
};

describe('default/theme', () => {
  const wrapper = mount(setup());

  it('should match style', () => {
    expect(wrapper).toExist();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
