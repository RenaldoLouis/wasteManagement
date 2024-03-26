import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { RenderRoutes } from './Routes/RoutesConfig';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//Inter
import "@fontsource/inter";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <RenderRoutes />
      </Router>
    </div>
  );
}

export default App;