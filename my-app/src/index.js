/*
 * Entry point for the ReactJS frontend.
 * Uses 'react-router' to route the paths to the given components
 */

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import { Router } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Game from './Components/CoinComponent';
import Table from './Components/HistoryComponent';
import Page from './Components/PageComponent';
import Main from './Components/MainComponent';
import NewGame from './Components/NewGameComponent';
import ResponseRequest from './Components/ResponseRequestComponent';
import Loading from './Components/LoadingComponent';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/main" component={Main} />
      <Route path="/coin" component={Game} />
      <Route path="/profile" component={Table} />
      <Route path="/new" component={NewGame} />
      <Route path="/request" component={ResponseRequest} />
      <Route path="/loading" component={Loading} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
