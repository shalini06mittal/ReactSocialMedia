import React from 'react'
import Home from './Home'
import MenuBar from './MenuBar'
import SideBar from './SideBar'
import { Redirect, Route} from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';
import './SocialBuilder.css';
export default class SocialBuilder extends React.Component {
    state = {
        show:true
    }
   
    render(){
    if(localStorage.getItem('email'))
    
    return (
        <div className='wrapper1'>
        <div className='builder'>
            
            <MenuBar email={localStorage.getItem('email')}/>
            <div className='row'>
                <div className='col-md-2'>
            {
                (this.state.show)?
                    <SideBar/>: <div></div>
            }
            </div>
           
            <div className='col-md-10'>
                <Route path='/home'><Home/></Route>
                <Route path="/profile"><Profile/></Route> 
                <Route path="/settings" component={Settings}></Route> 

            </div>
            </div>
        </div>
        </div>
    )
    else return <Redirect to='/login'></Redirect>
        }
}
