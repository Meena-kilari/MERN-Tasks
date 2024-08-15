import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

// Main component rendering LoginForm, RegisterForm, and Table
class Fruits extends Component {
  render() {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <LoginForm />

        </div>
        <div style={{ padding: '30px' }}>
          <RegisterForm />
        </div>
      </>
    );
  }
}

// LoginForm Component
class LoginForm extends Component {
  login = () => {
    const username = document.getElementById('newUsername').value;
    const password = document.getElementById('Password').value;
    if (username && password) {
      // Redirect to a different route or component here
      alert('Login successful!');
    } else {
      alert('Please enter both username and password.');
    }
  };

  render() {
    return (
      <form id="loginForm">
        <h2 style={{ textAlign: 'center' }}>LOGIN</h2>
        <div style={{ display: 'grid', justifyContent: 'center', border: '1px solid', padding: '10px' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <label htmlFor="newUsername">Username:</label>
            <input type="text" id="newUsername" name="newUsername" required />
            <br />
            <label htmlFor="Password">Password:</label>
            <input type="password" id="Password" name="Password" required />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button type="button" onClick={this.login}>Login</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

// RegisterForm Component
class RegisterForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    agree: false,
    passwordProtection: 'yes',
  };

  handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    this.setState({
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, password, confirmPassword, country, agree } = this.state;

    if (!name || !password || !confirmPassword || !country || !agree) {
      alert('All fields must be filled out and agree to conditions must be checked.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    alert('Registration successful!');
  };

  render() {
    return (
      <form id="regform" onSubmit={this.handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Register</h2>
        <div style={{ display: 'grid', justifyContent: 'center', border: '1px solid', padding: '10px' }}>
          <div style={{ border: '1px solid #ccc', padding: '10px' }}>
            <label htmlFor="name">Enter name:</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
            <br />
            <label htmlFor="email">Enter email id:</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <br />
            <label htmlFor="password">Enter password:</label>
            <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <br />
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input id="confirmPassword" type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} required />
            <br />
            <label htmlFor="country">Choose country:</label>
            <select id="country" name="country" value={this.state.country} onChange={this.handleChange} required>
              <option value="">Select a country</option>
              <option value="spain">Spain</option>
              <option value="argentina">Argentina</option>
              <option value="brazil">Brazil</option>
              <option value="england">England</option>
              <option value="italy">Italy</option>
              <option value="germany">Germany</option>
            </select>
            <br />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <label>Choose password protection:</label>
              <input type="radio" name="passwordProtection" value="yes" id="passwordYes" checked={this.state.passwordProtection === 'yes'} onChange={this.handleChange} />
              <label htmlFor="passwordYes">Yes</label>
              <input type="radio" name="passwordProtection" value="no" id="passwordNo" checked={this.state.passwordProtection === 'no'} onChange={this.handleChange} />
              <label htmlFor="passwordNo">No</label>
              <br />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="agree" name="agree" checked={this.state.agree} onChange={this.handleChange} />
              <label htmlFor="agree">Agree to all conditions</label>
              <br />
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <input type="submit" value="Register" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}



export default Fruits;
