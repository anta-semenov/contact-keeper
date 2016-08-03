import React from 'react'
import { Table, Column, Cell } from 'fixed-data-table'
import './ContactTable.css'
import 'fixed-data-table/dist/fixed-data-table.min.css'

export default class ContactTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {tableWidth:1210, tableHeight:400}
  }

  componentDidMount() {
    this._update()
    const win = window
    if (win.addEventListener) {
      win.addEventListener('resize', () => this._onResize(), false)
    } else if (win.attachEvent) {
      win.attachEvent('onresize', () => this._onResize())
    } else {
      win.onresize = () => this._onResize()
    }
  }

  _onResize() {
    clearTimeout(this._updateTimer)
    this._updateTimer = setTimeout(() => this._update(), 16)
  }

  _update() {
    const win = window
    this.setState({
      tableWidth: win.innerWidth - 60,
      tableHeight: win.innerHeight - 200,
    })
  }

  render() {
    const {contacts} = this.props
    return(
      <div style={{'marginTop': '30px'}}>
        <Table
          width={this.state.tableWidth}
          height={contacts.length*30+30 < this.state.tableHeight ? contacts.length*30+30+2 : this.state.tableHeight}
          rowsCount={contacts.length}
          rowHeight={30}
          headerHeight={30}
          rowClassNameGetter={() => 'contact-cell'}
        >
          <Column
            width={150}
            cell={<RowCell data={contacts} field='firstName'/>}
            header={<HeaderCell header='First Name'/>}
            flexGrow={1}
          />
          <Column
            width={150}
            cell={<RowCell data={contacts} field='lastName'/>}
            header={<HeaderCell header='Last Name'/>}
            flexGrow={1}
          />
          <Column
            width={100}
            cell={<RowCell data={contacts} field='dateOfBirth'/>}
            header={<HeaderCell header='Date of Birth'/>}
          />
          <Column
            width={120}
            cell={<RowCell data={contacts} field='phone'/>}
            header={<HeaderCell header='Phone'/>}
          />
          <Column
            width={120}
            cell={<RowCell data={contacts} field='email'/>}
            header={<HeaderCell header='Email'/>}
            flexGrow={1}
          />
          <Column
            width={200}
            cell={<RowCell data={contacts} field='note'/>}
            header={<HeaderCell header='Notes'/>}
            flexGrow={2}
          />
        </Table>
      </div>
    )
  }
}

const HeaderCell = ({header}) => (
  <Cell className='column-header'>{header}</Cell>
)

const RowCell = ({rowIndex, data, field}) => (
  <Cell>
    {data[rowIndex][field]}
  </Cell>
)
