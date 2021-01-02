import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
import users from '../users/users';

export default class SignUp extends Component {
  state={
    email: '',
    password: '',
    cpassword:'',
    error:''
  }
  handleChange = (event)=>{
    var name  = event.target.name;
    var value = event.target.value;
    this.setState({[name]:value})
  }
  handleSubmit = (event)=>{
    console.log('submit')
    event.preventDefault();
    var pwd = this.state.password;
    var cpwd = this.state.cpassword;
    if(pwd=='' || pwd !== cpwd)
    {
       this.setState( {error:'Password do not match'})
    }
    else{
      
      users.push({"email":this.state.email,"password":this.state.password});
      alert('Account created successfully...Please sign in ');
      this.props.history.push('/')
    }
  }
    render() {
      console.log(users)
        return (
          <div><h1 className='title'>Connectz</h1>
            <div className="wrapper fadeInDown">
            
            <div id="formContent">
              <div className="fadeIn first">
                <h2>Sign Up</h2>
              </div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" id="login"  value={this.state.email}
                onChange={this.handleChange}
                className="fadeIn second" name="email" placeholder="Email"/>
                <input type="password" id="password"  value={this.state.password}
                onChange={this.handleChange}
                className="fadeIn third" name="password" placeholder="Password"/>
                <input type="password" id="cpassword" value={this.state.cpassword}
                onChange={this.handleChange}
                className="fadeIn third" name="cpassword" placeholder="Confirm Password"/>
                <span className='error'>{this.state.error}</span>
                <input type="submit" className="fadeIn fourth" value="Create Account"/>
              </form>
              <Link to="/">Login</Link>
            </div>
          </div>
          </div>
        )
    }
}
