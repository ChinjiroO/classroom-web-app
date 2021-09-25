import 'bootstrap/dist/css/bootstrap.min.css'
import decode from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import { Route, useLocation, Switch } from 'react-router-dom'
import SignIn from './pages/auth/signIn/SignIn'
import { routes } from './pages/routes'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));  
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime());
    }
    setUser(JSON.parse(localStorage.getItem('profile')));    
  }, [location]);

  const routeComponents = routes.map(
    ({path, component}, key) => <Route exact path={path} component={component} key={key} />);
  
  return (
    <div>
      {user?.result ? (
        <div>
          <Switch>
            {routeComponents}
            <Route component={PageNotFound} />
          </Switch>
        </div>
      ) : (
        <SignIn/>
      )}      
    </div>
  );
}

export default App;

function PageNotFound() {
  let location = useLocation();
  return (
    <div>
      404 Page Not Found<br/>
      <code>{location.pathname}</code>
    </div>
  )
}