import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  NavLink,
} from "react-router-dom";
import Home from "./Home";
import Video from "./Video";
import Music from "./Music";
import Store from "./Store";
import News from "./News";
import Community from "./community";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Books from "./Books";
import ErrorPage from "./Error";

function App() {
  const style = {
    color: "black",
    textDecoration: "none",
    
  };

  const MobileNav = () => {
    return (
      <ul>
          <NavLink style={style} to="/">
            <li>
              <i className="fa-solid fa-house"></i>
            </li>
          </NavLink>
          <NavLink style={style} to="/music">
            <li>
              <i className="fa-solid fa-music"></i>
            </li>
          </NavLink>
          <NavLink style={style} to="/video">
            <li>
              <i className="fa-solid fa-video"></i>
            </li>
          </NavLink>
          <NavLink style={style} to="/books">
            <li>
              <i className="fa-solid fa-book"></i>
            </li>
          </NavLink>
          <NavLink style={style} to="/news">
            <li>
              <i className="fa-solid fa-newspaper"></i>
            </li>
          </NavLink>
          <NavLink style={style} to="/shop">
            <li>
              <i className="fa-solid fa-shop"></i>
            </li>
          </NavLink>
          <NavLink style={style} to="/community">
            <li>
              <i className="fa-solid fa-people-group"></i>
            </li>
          </NavLink>
        </ul>
    )
  }

  const Nav =() => {
    return (
      <ul>
          <NavLink style={style} to="/">
            <li>
              <i className="fa-solid fa-house"></i> Home
            </li>
          </NavLink>
          <NavLink style={style} to="/music">
            <li>
              <i className="fa-solid fa-music"></i> Music
            </li>
          </NavLink>
          <NavLink style={style} to="/video">
            <li>
              <i className="fa-solid fa-video"></i> Videos
            </li>
          </NavLink>
          <NavLink style={style} to="/books">
            <li>
              <i className="fa-solid fa-book"></i> Books
            </li>
          </NavLink>
          <NavLink style={style} to="/news">
            <li>
              <i className="fa-solid fa-newspaper"></i> News
            </li>
          </NavLink>
          <NavLink style={style} to="/shop">
            <li>
              <i className="fa-solid fa-shop"></i> Store
            </li>
          </NavLink>
          <NavLink style={style} to="/community">
            <li>
              <i className="fa-solid fa-people-group"></i> Community
            </li>
          </NavLink>
        </ul>
    )
  }

  // const [content, setContent] = useState(() => <Dashboard />);

  return (
    <Router>
      <div className="container">
        {window.innerWidth > 480 ? <Nav /> : <MobileNav />}
        {/* <Home /> */}{" "}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/video" element={<Video />} />
          <Route path="/shop" element={<Store />} />
          <Route path="/books" element={<Books />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/news" element={<News />} />
          <Route path="/community/*" element={<Community />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
