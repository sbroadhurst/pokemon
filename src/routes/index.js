import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import HomeComponent from './Home'
import Header from './Header'
import SearchComponent from './Search'
import AdvancedSearchComponent from './AdvancedSearch'
import AdvancedResults from './AdvancedResults'
import Card from './Card'

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
              path="/advancedSearchResults"
              component={AdvancedResults}
            />
            <Route exact path="/info/:id" component={Card} />
          </Switch>
        </div>
      </Router>
    )
  }
}
