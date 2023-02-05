// imports
import './App.css';
import { Route, Switch, useLocation} from "react-router-dom";
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import CreateBreed from './components/CreateBreed/CreateBreed';
import Detail from './components/Detail/Detail';




// codigo
function App() {

const location = useLocation();

  return (
    <div className="App">
      <div>
      </div>
        {location.pathname === '/' ? null : <NavBar/>} 
      <Switch>
      <Route exact path='/'> <LandingPage/> </Route>
      <Route  path ='/home' > <Home/> </Route>
      <Route  path ='/breedcreate' > <CreateBreed/> </Route>
      <Route  path ='/detalle/:idRaza' > <Detail/> </Route>
      </Switch>
    </div>
  );
}

export default App;