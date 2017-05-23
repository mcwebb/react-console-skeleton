import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import stubContext from 'react-stub-context';

it('renders without crashing', () => {
  const testApp = stubContext(App,  {
    router: {
      history: {},
      route: {},
    },
  });

  ReactDOM.render(<testApp />, document.createElement('div'));
});
