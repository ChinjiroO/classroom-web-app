import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './pages/auth/signIn/SignIn'
import Home from './pages/dashboard/home/Home'
import { Route } from 'react-router-dom'
import { routes } from './routes'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import * as actionType from './constant/actionTypes';

function App() {
  const routeComponents = routes.map(
    ({path, component}, key) => <Route exact path={path} component={component} key={key} />);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));  
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/sign_in');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  
  return (
    <div>
      {user?.result ? (
        <div>{routeComponents}</div>
      ) : (
        <SignIn/>
      )}      
    </div>
  );
}

export default App;
