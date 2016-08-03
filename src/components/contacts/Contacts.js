import React from 'react'
import AddContactButton from '../addContactButton/AddContactButton'
import ContactTable from '../../containers/ContactTableContainer'
import Filter from '../filter/Filter'

import './Contacts.css'

const Contacts = (props) => (
  <div>
    <div className='contacts--toolbar'>
      <Filter {...props}/>
      <AddContactButton />
    </div>
    <ContactTable {...props}/>
  </div>
)

export default Contacts
