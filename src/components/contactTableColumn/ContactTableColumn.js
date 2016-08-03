import React from 'react'
import { Column, Cell} from 'fixed-data-table'
import './ContactTableColumn.css'

const ContactColumn = ({header, field, data, width}) => {
  console.log(header);
  return (
    <Column
      width={width}
      cell={<RowCell data={data} field={field}/>}
      header={<HeaderCell header={header}/>}
    />
  )
}

export default ContactColumn
