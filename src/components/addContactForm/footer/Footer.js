import React from 'react'
import { Link } from 'react-router'
import './Footer.css'

const Footer = ({onSave}) => (
  <div className='acf-footer'>
    <Link to='/' className='acf-save-button' onClick={onSave}>Save</Link>
  </div>
)

export default Footer
