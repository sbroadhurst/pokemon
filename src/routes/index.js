import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import HomeComponent from '../home/'
import Header from '../header'
import SearchComponent from '../search'
import AdvancedSearchComponent from '../advancedSearch'
import AdvancedResults from '../advancedResults'

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/search/:text" component={SearchComponent} />
            <Route
              exact
              path="/advancedSearch"
              component={AdvancedSearchComponent}
            />
            <Route
              exact
              path="/advancedSearchResults/:name?/:text?/:type?"
              component={AdvancedResults}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}
