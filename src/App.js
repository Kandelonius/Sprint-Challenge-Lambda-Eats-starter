import React, { useState } from 'react';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import Form from './PizzaForm'
import Home from './Home'
import { useRouteMatch } from 'react-router-dom'




const App = () => {
  const [home] = useState(Home);
  // const { path, url } = useRouteMatch();


  return (
    <div>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/order">Order</Link>
        </li>
      </nav>

      <Switch>
        <Route path='/order'  ><Form /></Route>

        <Route path="/"  ><Home /></Route>
      </Switch>
    </div>
  );
};

export default App;