import React from "react";
import './App.css';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import About from './components/About';
import Shop from './components/Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SideNavPage from './components/SideNavPage';
import Sorting from "./components/Sorting";
import { useSelector, useDispatch} from 'react-redux';
import { increment, updateName } from './actions';
import signUp from './components/signUp';
import signIn from './components/signIn';
import college from './components/college';
import students from './components/students';
import count from './components/count';
import sweets from './components/sweets';
import Counter from "./components/Counter";
import fib from "./components/fib";




function App() {
  return (
    <Router>
    <div>
      <Nav />
      <div className="d-flex">
        <SideNavPage />
        <div className="flex-grow-1 p-2">
          <Switch>
           <Route path = "/" exact component={college}/>
           <Route path ="/about" component={About} />
            <Route path ="/shop" component={Shop} />
            <Route path ="/signUp" component={signUp}/>
            <Route path ="/signIn" component={signIn}/>
            <Route path ="/college" component={college}/>
            <Route path ="/students" component={students}/>
            <Route path ="/Counter" component={Counter}/>
          </Switch>
        </div>
      </div>
   </div>
    </Router>
  );
}
 const Home = () => {
     const counter = useSelector(state => state.counter);
     const isLogged = useSelector(state => state.isLogged);
     const profile = useSelector(state => state.profile);
     const signUp = useSelector(state => state.signUp);
     const dispatch = useDispatch();
      
   return(
   <div>
     <h1>Counter {counter}</h1>
     <button onClick={()=> dispatch(increment())}>+</button>
     <button>-</button>
     {isLogged ?  <h3>Valuable Information I Shouldn't see </h3> : ''}
    <div>
    <Form.Control type="name" placeholder="Enter Name" name="name" value={profile.name} onChange={event => dispatch(updateName(event.target.value))} />
   <h6>{profile.name}</h6>
   <h6>{profile.qualification}</h6>
    </div>

   </div>
   );
 };

export default App;
