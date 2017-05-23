import type { Match, Location, RouterHistory } from 'react-router-dom';
import type { Component } from 'react';

export type PageProps = {
  match: Match,
  location: Location,
  history: RouterHistory,
};

export interface Page extends Component {
  props: PageProps;
}

export type PageConfig = {|
  path: string,
  title: string,
  primary: boolean,
|};
