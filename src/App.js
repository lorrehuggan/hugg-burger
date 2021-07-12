import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import About from './Pages/About';
import Delivery from './Pages/Delivery';
import Location from './Pages/Locations';
import Menu from './Pages/Menu';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/menu' component={Menu}/>
          <Route path='/delivery' component={Delivery}/>
          <Route path='/about' component={About}/>
          <Route path='/locations' component={Location}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
