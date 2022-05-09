import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./about/HomePage";
import AboutPage from "./home/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";

function App() {
  return (
    <div className="container-fliud">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
