// @flow
import React, { Component } from 'react';
import { withRouter, matchPath } from 'react-router-dom';
import Helmet from 'react-helmet';
import type {
  RouterHistory,
  Location,
  Match,
} from 'react-router-dom';

class TitleSwitchComponent extends Component {
  props: {
    titles: Map<string, string>,
    match: Match,
    location: Location,
    history: RouterHistory,
    helmet: boolean,
  };

  getMatchTitle() {
    // all this logic is working around some
    // apparent deficiencies in withRouter
    // because for some reason props.match
    // is the first parent match not the specific
    // match so we have to do the matchPath() below
    const {
      titles,
      location,
    } = this.props;

    const path = location.pathname;

    const fullPath = path.slice(-1) === '/' ? path : `${path}/`;

    if (titles.has(fullPath)) {
      return titles.get(fullPath);
    }

    let title = null;
    for (const entry of titles.entries()) {
      if (matchPath(fullPath, {
        path: entry[0],
        exact: true,
      })) {
        title = entry[1];
        break;
      }
    }

    return title;
  }

  render() {
    if (this.props.helmet) {
      return (
        <Helmet
          title={this.getMatchTitle()}
          defaultTitle="Console"
          titleTemplate="%s - Console"
        />
      );
    }

    return <span>{this.getMatchTitle()}</span>;
  }
}

export default withRouter(TitleSwitchComponent);
