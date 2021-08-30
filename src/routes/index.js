import React, { Component } from 'react'
import { Switch,  BrowserRouter as Router,Redirect} from 'react-router-dom';
import { Helmet } from 'react-helmet'
import PublicRoute from '../PublicRoute';

import Urls from '../pages/urls';
import AddEditUrl from '../pages/urls/addEditUrl';
import NotFound from '../components/system/NotFound';

class TrelloBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Helmet>
            <title>{"Test"}</title>
          </Helmet>
          <Switch>
            <PublicRoute path='/' component={Urls} exact sensitive/>
            <PublicRoute path='/add-edit-url' component={AddEditUrl} exact sensitive/>
            <PublicRoute path='/add-edit-url/:id' component={AddEditUrl} exact sensitive/>
            <Redirect to={'/NotFound'}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default TrelloBoard;
