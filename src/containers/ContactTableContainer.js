import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import ContactTable from '../components/contactTable/ContactTable'
import { getContacts } from '../reducer'

const mapStateToProps = (state, {location}) => ({contacts: getContacts(state, location.query.filter)})

export default withRouter(connect(mapStateToProps)(ContactTable))
