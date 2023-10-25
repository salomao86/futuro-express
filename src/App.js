import React, { useState }from 'react';
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
import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "./context/auth";

const App = () => {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/sobre" component={Sobre} />
          <Route exact path="/cliente" component={Cliente} />
          <PrivateRoute exact path="/cliente-list" component={ClienteList} />
          <Route exact path="/cliente/:id" component={Cliente} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/*" component={NotFound} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
