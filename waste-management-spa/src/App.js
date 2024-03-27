import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { RenderRoutes } from './Routes/RoutesConfig';
import { HashRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

//Inter
import "@fontsource/inter";
import { createContext, useEffect, useState } from 'react';
import { NAVBAR_TITLE } from './Constants/NavbarTitle';
import { ROUTE_PATH } from './Constants/RoutePath';

export const AppContext = createContext({})

function App() {
  let history = useHistory();
  const [isNavbarBack, setIsNavbarBack] = useState(true)
  const [navbarTitle, setNavbarTitle] = useState(NAVBAR_TITLE.HOME)

  const AppContextValue = {
    setIsNavbarBack,
    isNavbarBack,
    setNavbarTitle,
    navbarTitle
  }

  return (
    <AppContext.Provider
      value={AppContextValue}
    >
      <div>
        <Navbar />
        <Router>
          <RenderRoutes />
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;