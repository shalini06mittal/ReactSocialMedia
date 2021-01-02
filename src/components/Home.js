import React, { Component } from 'react'
import pic1 from '../assets/p1.png';
import './Home.css';
import Posts from './Posts';
export default class Home extends Component {
    state = {
        post:'',
        posts:[],

    }
    handleChange = (e)=>{
        this.setState({post:e.target.value})
    }

    _handleKeyDown = (e) => {
        var posts = this.state.posts;
        if (e.key === 'Enter') {
            var date = new Date();
            var newpost = {post:e.target.value, created:date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()};
            posts.push(newpost);
            this.setState({posts:posts, post:''});
        }
      }
    render() {
        return (
            <div className='container'>
                  <div className="input-group mb-3 jss58">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            <img src={pic1} className='img-fluid' alt='bgnd'/></span>
                    </div>
                    <input type="text" className="form-control" 
                    placeholder="Whats new with YOU?" 
                     value={this.state.post}
                    aria-label="Username" aria-describedby="basic-addon1"
                    onKeyDown={this._handleKeyDown}
                    onChange={this.handleChange}/>
                    </div>
                  
                    {
                        this.state.posts.length > 0?
                        this.state.posts.map((post)=>{
                            console.log(post)
                            return <Posts post={post}/>
                        }):<div></div>
                    }
            </div>
        )
    }
}
