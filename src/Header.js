import React, {Component} from 'react';
import { FormErrors } from './formErrors';

class Header extends Component {
  constructor (props) {
  super(props);
  this.state = {
    email: '',
    interest: '',
    formErrors: {email: ''},
    emailValid: false,
    formValid: false
  }
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.showFormValues();
  }

  showFormValues() {
    console.log(`email: ${this.state.email} interest: ${this.state.interest}`);
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid
                    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render() {
    const title1 = "Stay up to date with ecommerce trends";
    const title2 = "with our newsletter";
    return(
      <div className="p-5 m-3 flex-start">
        <div className="container">
              <div className="title font-weight-bold text-left row">{title1}</div>
              <div className="title font-weight-bold text-left row">{title2}</div>
              <hr className="row line" align="left"></hr>
        </div>
        <form className="pt-5" onSubmit={this.handleSubmit}>
          <div className={`form-group container ${this.errorClass(this.state.formErrors.email)}`}>
            <div className="text-left row">
              <label htmlFor="exampleInputEmail1" className="field">Subscribe for free marketing tips</label>
            </div>
            <div className="flex mt-3 row">
              <input
              type="email"
              name="email"
              className="form-control col-md-8 col-xs-12"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Email Address"
              value={this.state.email}
              onChange={this.handleUserInput.bind(this)}
              />
              <select
              className="form-control col-md-4 col-xs-12"
              id="select"
              type="interest"
              name="interest"
              onChange={this.handleUserInput.bind(this)}
              >
                <option selected>Interested in</option>
                <option>Online store</option>
                <option>Retail package</option>
                <option>Shopify POS</option>
                <option>Facebook shop</option>
              </select>
            </div>
            <div className="flex row">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className="flex mt-3 row">
              <button
              type="submit"
              className="btn btn-purple flex-grow"
              disabled={!this.state.formValid}
              >
              Sign up now
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Header;
