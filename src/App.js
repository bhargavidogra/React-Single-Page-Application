import React from "react";
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { ArticalsListView } from "./Pages/ArticalsListView";
import { ArticalPage } from "./Pages/ArticalPage";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { NavBar } from "./NavBar";

function App() {
  return (
    <Router>
     <NavBar/> 
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} />
                <Route path="/articals-list" component={ArticalsListView} />
                <Route path="/artical/:name" component={ArticalPage} />
                <Route component={NotFoundPage}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Router>
  );
}

export default App;
