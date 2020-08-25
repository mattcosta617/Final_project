import React from 'react';
import routes from './config/routes';
import NavBar from './component/NavBar/NavBar';
import { withRouter } from 'react-router-dom';

import './App.css';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <NavBar />
       { routes }
    </div>
  );
}

function withRouter(Component, props) {
  return function(props) {
    const routerProps = {
      history: () => {},
      goBack: () => {},
    };

    return <Component {...props} {...routerProps} />
  }
}

export default withRouter(App);
