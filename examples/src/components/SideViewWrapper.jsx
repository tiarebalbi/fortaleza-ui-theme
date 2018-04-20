import React from 'react';
import ButtonWrapper from './ButtonWrapper';
import { Button, SideView } from '@tiarebalbi/fortaleza-ui-theme';

export default class SideViewWrapper extends React.Component {

  state = {
    open: false,
  };

  toggleSideView = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleSideView}>
          {!this.state.open && 'Open SideView'}
          {this.state.open && 'Close SideView'}
        </Button>
        {this.state.open && <SideView title="Title" close={this.toggleSideView} component={ButtonWrapper}/>}
      </div>
    );
  }

}