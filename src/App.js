/**
 * Word Search Engine - Application
 *
 * @category   Application_Frontend
 * @package    word-search-engine
 * @author     Suman Barua
 * @developer  Suman Barua <sumanbarua576@gmail.com>
 **/

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SearchWords from "./components/search-words";
import MainMenu from "./components/main-menu";
import NotFound from "./components/not-found";
import WordInfo from "./components/word-info";
import "react-toastify/dist/ReactToastify.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <ToastContainer />
        <MainMenu />

        <div className="content">
          <Switch>
            <Route
              path="/word-info/:page/:language/:base/:word"
              component={WordInfo}
            />
            <Route path="/not-found" component={NotFound} />
            <Route path="/search-words" exact component={SearchWords} />
            <Redirect from="/" to="/search-words" exact />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
