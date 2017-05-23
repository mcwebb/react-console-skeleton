// @flow
import React, { Component } from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import { SideCloser } from 'grommet-addons/components/SideSplit';
import {
  Logout as LogoutIcon,
} from 'grommet/index-icons';
import Title from 'grommet/components/Title';

class AppSidebarComponent extends Component {
  props: {
    title: string,
    hideHandler: () => void,
    logoutHandler: ?() => void,
    children: React.Element<*>,
  };

  render() {
    const {
      title,
      hideHandler,
      logoutHandler,
    } = this.props;

    const eLogout = logoutHandler ? (
      <Anchor
        animateIcon
        label="Log Out"
        icon={<LogoutIcon />}
        onClick={logoutHandler}
        path="/"
      />
    ) : null;

    return (
      <Sidebar justify="between" colorIndex="light-2">
        <Header pad="medium" justify="between">
          <Title>{title}</Title>
          <SideCloser onClick={hideHandler} />
        </Header>
        <Menu primary flex="grow">
          {React.Children.map(this.props.children, child =>
            React.cloneElement(child, { onClick: hideHandler })
          )}
        </Menu>
        <Footer pad="medium">
          {eLogout}
        </Footer>
      </Sidebar >
    );
  }
}

export default AppSidebarComponent;
