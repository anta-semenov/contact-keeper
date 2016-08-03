import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Field from './field/Field'
import './AddContactForm.css'


class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      phone: '',
      email: '',
      note: ''
    }
  }

  changeFieldInput(field) {
    return (e) => {this.setState({[field]: e.target.value})}
  }

  saveContact() {
    this.props.saveContact(this.state)
  }

  render() {
    return(
      <div className='acf-background'>
        <div className='acf-form'>
          <Header/>
          <div className='acf-field-container'>
            <Field header='First Name' value={this.state.firstName} onChange={this.changeFieldInput('firstName')} width='40%'/>
            <Field header='Last Name' value={this.state.lastName} onChange={this.changeFieldInput('lastName')} width='40%'/>
            <Field header='Date of Birth' value={this.state.dateOfBirth} onChange={this.changeFieldInput('dateOfBirth')} width='40%'/>
            <Field header='Phone Number' value={this.state.phone} onChange={this.changeFieldInput('phone')} width='40%'/>
            <Field header='Email' value={this.state.email} onChange={this.changeFieldInput('email')} width='40%'/>
            <Field header='Notes' value={this.state.note} onChange={this.changeFieldInput('note')} width='100%' rows={3}/>
          </div>
          <Footer onSave={() => {this.saveContact()}}/>
        </div>
      </div>
    )
  }
}

export default Form

Form.propTypes = {
  saveContact: React.PropTypes.func.isRequired
}
