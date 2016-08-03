import { createStore } from 'redux'
import reducer from './reducer'
import throttle from 'lodash/throttle'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const saveState = (state) => {
  const serializedState = JSON.stringify(state)
  try {
    localStorage.setItem('state', serializedState)
  } catch (err) {
    //
  }
}

const configureStore = () => {
  const store = createStore(reducer, loadState())
  store.subscribe(throttle(() => {saveState(store.getState())}, 1500))
  return store
}

export default configureStore
