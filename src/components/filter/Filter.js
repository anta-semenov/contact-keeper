import React from 'react'
import './Filter.css'

export default class Filter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filter: props.location.query.filter}
  }

  componentWillReceiveProps(newProps) {
    this.setState({filter: newProps.location.query.filter})
  }

  onChange(e) {
    this.context.router.push({pathname:'/contact-keeper/', query: {filter: e.target.value}})
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.context.router.push({pathname:'/contact-keeper/', query: {filter: this.state.filter}})
    }
    if (e.keyCode === 27) {
      this.setState({filter: ''})
      this.context.router.push({pathname:'/contact-keeper/', query: {filter: ''}})
    }
  }

  render() {
    return(
      <div className='filter'>
        <input className='filter-field' placeholder='Search' value={this.state.filter || ''} onChange={(e) => this.onChange(e)} onKeyDown={(e) => this.onKeyDown(e)}/>
      </div>
    )
  }
}

Filter.contextTypes = {
  router: React.PropTypes.object.isRequired
};
