import DashboardPage from './DashboardPage';
import SecondPage from './SecondPage';
import SubPage from './SubPage';
import type { Page } from './Page';

const pages: Array<Page> = [
  DashboardPage,
  SecondPage,
  SubPage,
];

const pathPageMap: Map<string, string> = new Map(
  pages.map((page: Page) => [
    page.config.path,
    page.config.title,
  ])
);

export default pages;
export {
  pathPageMap,
};
