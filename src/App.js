import React from "react";
import './App.css';
import {Header} from "./Components";
import Home from "./Components/pages/Home";
import {Route, useLocation} from "react-router-dom"
import Cart from "./Components/pages/Cart";
import Navbar from "./Components/Header/Navbar";
import SwiperMain from "./Components/SwiperMain/SwiperMain";
import SwiperSub from "./Components/SwiperSub/SwiperSub";
import ScrollToTop from "./Components/ComponentsHelpers/ScrollToTop";






function App() {

    const location = useLocation()
    const path = location.pathname
    console.log(path)

  return (
      <div className="wrapper">
          <ScrollToTop />
          <Header />
          {path === '/' &&
              <>
                  <Navbar />
                  <SwiperMain />
                  <SwiperSub />
              </>
          }

        <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
        </div>
      </div>
  );
}

export default App
