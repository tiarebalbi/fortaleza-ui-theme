import React from 'react';
import styled from 'styled-components';

import { Button } from '@tiarebalbi/fortaleza-ui-theme';

const Style = styled.div`
  button {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

const ButtonWrapper = () => {
  return (
    <Style>
      <Button onClick={ () => console.log('clicked') }>Primary</Button>
      <Button palette="secondary">Secondary</Button>
      <Button palette="danger" icon="close-circle-o">danger</Button>
      <Button palette="alert">alert</Button>
      <Button palette="success">success</Button>
      <Button palette="white">white</Button>
      <Button palette="grayscale">grayscale</Button>
      <Button disabled={ true }>Disabled</Button>
      <Button loading={ true } />
    </Style>
  );
};

export default ButtonWrapper;
