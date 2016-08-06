import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import App from './app/App'
import AddContactForm from '../containers/AddContactFormContainer'
import { createHistory, useBasename } from 'history'

const browserHistory = useBasename(createHistory)({
  basename: '/contact-keeper'
})

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='addcontact' component={AddContactForm}/>
      </Route>
    </Router>
  </Provider>
)

export default Root
