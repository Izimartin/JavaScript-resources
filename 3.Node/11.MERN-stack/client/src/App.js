import React, {useEffect, useState} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './containers/Home/Home'
import Login from './containers/Login/Login'
import Task from './containers/Task/Task'

function App() {

  const [hasToken, setToken] = useState(false)

  useEffect(() => {
    console.log(hasToken)
  })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/task">
            <Task hasToken={hasToken}/>
          </Route>
          <Route exact path="/login">
            <Login setAuthToken={(val)=>setToken(val)}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
