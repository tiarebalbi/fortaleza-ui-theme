import React from 'react';
import { Button } from '@tiarebalbi/fortaleza-ui-theme';

const ButtonWrapper = () => {
  return (
    <div>
      <Button onClick={ () => console.log('clicked') }>Primary</Button>
      <Button palette="secondary">Secondary</Button>
      <Button palette="danger" icon="close-circle-o">danger</Button>
      <Button palette="alert">alert</Button>
      <Button palette="success">success</Button>
      <Button palette="white">white</Button>
      <Button palette="grayscale">grayscale</Button>
      <Button disabled={ true }>Disabled</Button>
      <Button loading={ true } />
    </div>
  );
};

export default ButtonWrapper;
