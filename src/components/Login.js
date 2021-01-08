import React, { Component } from 'react'
import './Login.css';
import users from '../users/users';
import { Link } from 'react-router-dom';
import SocialBuilder from './SocialBuilder';
export default class Login extends Component {
    state={
        email:'admin@connectz.com',
        password:'admin',
    }
    handleChange =(event)=>{
        var name  = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value})
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        var isLoginFailed = true;
        for(var user of users)
        {
            if(user.email === this.state.email && user.password === this.state.password)
                {
                  console.log('s')
                  isLoginFailed = false;
                  localStorage.setItem('email', user.email)
                   this.props.history.push({
                     pathname:"/home"
                   });
                  
                    break;
                }
        }
        if(isLoginFailed) alert('username or password is wrong')
    }
    render() {
      if(localStorage.getItem('email'))
        return <SocialBuilder/>
        else{
        return (
          <div><h1 className='title'>Connectz</h1>
            <div className="wrapper fadeInDown">
            <div id="formContent">
              <div className="fadeIn first">
                <h2 className='sign'>Sign In</h2>
              </div>
              <form onSubmit={this.handleSubmit}>
                <input type="text" id="login" className="fadeIn second" name="email" 
                value={this.state.email} placeholder="Email" onChange={this.handleChange}/>
                <input type="password" id="password" className="fadeIn third" name="password"
                value={this.state.password} placeholder="Password" onChange={this.handleChange}/>
                <input type="submit" className="fadeIn fourth" value="Log In"/>
              </form>
                <div className='create'>
                    <Link className="underlineHover" to='/signup'>Create Account</Link>
                </div>
              <div id="formFooter">
                <Link className="underlineHover" to="/forgot">Forgot Password?</Link>
              </div>
            </div>
          </div>
          </div>
        )       
        } 
    }
}
