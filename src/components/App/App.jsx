// @flow
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from 'grommet/components/App';
import Anchor from 'grommet/components/Anchor';
import SideSplit from 'grommet-addons/components/SideSplit';
import AppSidebar from '../AppSidebar';
import AppMain from '../AppMain';
import TitleSwitch from '../TitleSwitch';
import pages, { pathPageMap } from '../../pages';
import type { RouteDefinition } from '../../routes';
import './App.scss';

type AppProps = {
  routes: RouteDefinition[]
};

type AppState = {
  sidebarActive: boolean,
};

class AppComponent extends Component {
  props: AppProps;
  state: AppState;

  constructor() {
    super();

    this.state = {
      sidebarActive: false,
    };
  }

  toggleSidebar = () => {
    this.setState((state: AppState) => ({
      sidebarActive: !state.sidebarActive,
    }));
  };

  render() {
    return (
      <App centered={false}>
        <TitleSwitch helmet titles={pathPageMap} />
        <SideSplit active={this.state.sidebarActive}>
          <AppSidebar
            title="Console"
            hideHandler={this.toggleSidebar}
          >
            {pages.filter(page => page.config.primary).map(page =>
              <Anchor
                key={page.config.path}
                // "index: true" must be passed for index link
                // otherwise it's always active because
                // the match is not exact by default
                path={page.config.path === '/' ? {
                  path: page.config.path,
                  index: true,
                } : page.config.path}
              >
                {page.config.title}
              </Anchor>
            )}
          </AppSidebar>
          <AppMain brandHandler={this.toggleSidebar} routes={this.props.routes}>
            {this.props.routes.map(definition =>
              <Route
                exact
                key={definition.path}
                {...definition}
              />
            )}
          </AppMain>
        </SideSplit>
      </App>
    );
  }
}

export default AppComponent;
