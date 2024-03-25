import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { RenderRoutes } from './Routes/RoutesConfig';

//Inter
import "@fontsource/inter";

function App() {
  return (
    <div>
      <Navbar />
      <RenderRoutes />
    </div>
  );
}

export default App;