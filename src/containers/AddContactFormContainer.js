import AddContactForm from '../components/addContactForm/AddContactForm'
import { connect } from 'react-redux'
import { saveContact } from '../actions/actionCreators'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  saveContact: (contactData) => dispatch(saveContact(contactData))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddContactForm)
