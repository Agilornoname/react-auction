import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NextApp from './NextApp';
import reportWebVitals from './reportWebVitals';
import {AppContainer} from 'react-hot-loader';

const rootApp = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <NextApp/>
    </AppContainer>,
    document.getElementById('root')
  );
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./NextApp', () => {
    rootApp(NextApp);
  });
}
