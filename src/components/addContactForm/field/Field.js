import React from 'react'
import './Field.css'

const Field = ({header, value, onChange, width, rows}) => (
  <div className='acf-field' style={{width}}>
    <div className='acf-field--header'>{header}</div>
    <textarea onChange={onChange} value={value} className='acf-field--input' rows={rows || 1}></textarea>
  </div>
)

export default Field
