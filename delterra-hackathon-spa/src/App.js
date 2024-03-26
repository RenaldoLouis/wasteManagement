import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { RenderRoutes } from './Routes/RoutesConfig';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//Inter
import "@fontsource/inter";
import { createContext, useState } from 'react';

export const AppContext = createContext({})

function App() {
  const [isNavbarBack, setIsNavbarBack] = useState(true)

  const AppContextValue = {
    setIsNavbarBack,
    isNavbarBack,
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