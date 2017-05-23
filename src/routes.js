import type Component from 'react';
import pages from './pages';

export type RouteDefinition = {|
  path: string,
  component: Component,
  admin: boolean
|};

const routes: RouteDefinition[] = pages.map((page) => {
  return { path: page.config.path, component: page, admin: page.config.admin };
});

export default routes;
