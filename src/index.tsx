import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HandheldGame } from "./Demos/Handheld";
import { Life } from "./Demos/Life";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/life" component={Life} />
      <Route path="/handheldgame" component={HandheldGame} />
    </div>
  );
}

function Home() {
  return (
    <div>
      <Link to="/handheldgame">Handheld</Link>
      <Link to="/life">Life</Link>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(
  <Router>
    <App />
  </Router>,
  rootElement
);
