import React from 'react';
import './css/tailwind.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header/index.js';
import Home from './pages/Home/index.js';
import Sobre from './pages/Sobre/index.js';
import Cliente from './pages/Cliente/index.js';
import ClienteList from './pages/ClienteList/index.js';
import Login from './pages/Login/index.js';
import NotFound from './pages/NotFound/index.js';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/sobre" component={Sobre}/>
      <Route exact path="/cliente" component={Cliente}/>
      <Route exact path="/cliente/:id" component={Cliente}/>
      <Route exact path="/cliente-list" component={ClienteList} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/*" component={NotFound}/>
    </Switch>
  </Router>
);

export default App;
