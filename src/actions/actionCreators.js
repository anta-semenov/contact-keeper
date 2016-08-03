import * as actionTypes from '../actions/actionTypes'

export const addContact = () => ({type: actionTypes.ADD_CONTACT})

export const saveContact = (contactData) => ({type: actionTypes.SAVE_CONTACT, contactData})

export const closeContactDetails = () => ({type: actionTypes.CLOSE_CONTACT_DETAILS})
