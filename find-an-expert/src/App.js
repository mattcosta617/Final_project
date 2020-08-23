import React from 'react';
import NavBar from './component/NavBar/NavBar';
import routes from './config/routes';

function App() {
  return (
    <div className="App">
      <NavBar />
       { routes }
    </div>
  );
}

export default App;
