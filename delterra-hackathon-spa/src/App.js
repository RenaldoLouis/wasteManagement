import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { RenderRoutes } from './Routes/RoutesConfig';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//Inter
import "@fontsource/inter";
import { createContext, useState } from 'react';
import { NAVBAR_TITLE } from './Constants/NavbarTitle';

export const AppContext = createContext({})

function App() {
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