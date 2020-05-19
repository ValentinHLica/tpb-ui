import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Search Page
import Search from "./components/Search/Main";

// Provider
import Provider from "./components/Context";

// Torrent Results
import Results from "./components/Results/Main";

// Torrent Page
import Torrent from "./components/Torrent/Main";

// 404 Page
import PageNotFound from "./components/other/PageNotFound";

export default function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route
            exact
            path="/results/:searchQuery/:category/:sort"
            component={Results}
          />
          <Route exact path="/torrent/:torrentId" component={Torrent} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
