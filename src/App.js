import React from "react";
import './App.css';
import {Header} from "./Components";
import Home from "./Components/pages/Home";
import {Route} from "react-router-dom"
import Cart from "./Components/pages/Cart";






function App() {


  return (
      <div className="wrapper">
        <Header />
        <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />


        </div>
      </div>

  );
}

export default App
