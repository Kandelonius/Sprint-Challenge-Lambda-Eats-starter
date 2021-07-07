import React, { useState } from 'react';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import Form from './PizzaForm'
import Home from './Home'
import Div from './styled-comp'




const App = () => {
  const [home] = useState(Home);


  return (
    <Div>
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
    </Div>
  );
};

export default App;