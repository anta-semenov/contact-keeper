import React from 'react'
import { Link } from 'react-router'
import './AddContactButton.css'

const Button = () => (
  <Link to='/addcontact' className='acb' activeClassName='acb__is-active'>
    <div className='acb--plus'></div>
    <div className='acb--text'>Contacts Keeper</div>
  </Link>
)

export default Button
