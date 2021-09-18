import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom'
import { routes } from './routes'
import Navbar from './components/Navbar'

function App() {

  const routeComponents = routes.map(
    ({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    
  return (
    <div>
        {/* <Navbar /> */}
        {routeComponents}
    </div>
  );
}

export default App;
