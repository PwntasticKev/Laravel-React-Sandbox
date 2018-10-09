import React, { Component } from 'react'
    import ReactDOM from 'react-dom'
    import { BrowserRouter, Route, Switch } from 'react-router-dom'
    import Header from './Header'

    class IWANTTHISONE extends Component {
      render () {
        return (
          <BrowserRouter>
          <Switch>
          <Route exact path="/h" component={Header} />
        </Switch>

          </BrowserRouter>
        )
      }
    }

  ReactDOM.render(<IWANTTHISONE />, document.getElementById('testingyo')) /* <-- This is your <div id="testingyo"></div> inside of your view*/