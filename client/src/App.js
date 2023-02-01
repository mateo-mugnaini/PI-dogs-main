// imports
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';



// codigo
function App() {


  return (
    <div className="App">
      <div>
      </div>
      <Router>
        <NavBar/>
      <Switch>
      <Route exact path='/'> <LandingPage/> </Route>
      <Route  path ='/home' > <Home/> </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;