import React from 'react'
import { Link } from 'react-router'
import './Header.css'

const Header = () => (
  <div className='acf-header'>
    <div style={{color:'#C7DAEC'}}>Contacts Keeper</div>
    <div>
      <Link to='/contact-keeper/'>
        <div className='acf-close-button'/>
      </Link>
    </div>
  </div>
)

export default Header
