import * as actionTypes from '../actions/actionTypes'

const contactReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SAVE_CONTACT:
      return [...state, action.contactData]
    default:
      return state
  }
}

export default contactReducer

//selectors
export const getContacts = (state, filter) => {
  if (!filter || filter === '') {
    return state
  } else {
    return state.filter(item => Object.keys(item).some(propertyName => item[propertyName].toLowerCase().indexOf(filter.toLowerCase()) !== -1))
  }
}
