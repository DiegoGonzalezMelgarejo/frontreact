import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/Home';
import Nav from './components/nav.component';
import { Route, Switch } from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Login from './components/login.component';
function App() {
  return (
    
    <BrowserRouter>
    <Nav/>

 <div className="container">
<Switch>
<Route exact path="/" component={Home}></Route>
<Route exact path="/login" component={Login}></Route>
</Switch>
 </div>
   
    </BrowserRouter>
  );
}

export default App;
