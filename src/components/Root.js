import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import App from './app/App'
import AddContactForm from '../containers/AddContactFormContainer'

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/contact-keeper/' component={App}>
        <Route path='addcontact' component={AddContactForm}/>
      </Route>
    </Router>
  </Provider>
)

export default Root
