import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Gallery from "./compnents/Gallery/Gallery";
import Header from "./compnents/Header";
import Login from "./compnents/Login";
import Student from "./compnents/Student/Student";
import GalleryDetail from "./compnents/Gallery/GalleryDetail";

function App({ props }) {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/gallerydetail/:id"  component={GalleryDetail} />

        <Route path="/student" exact component={Student} />
      </Switch>
    </Router>
  );
}

export default App;
