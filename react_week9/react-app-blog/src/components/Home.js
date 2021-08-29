import React from 'react';
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import { store } from '../store'
// import BlogLogo from '../public/images/blog.png'


class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <h3 className='app-header'>Home</h3>
        {
          store.getState().posts.length > 0 ? (
            store.getState().posts.map((post) => {
              return (
                <div className='app-list' key={post.id}>
                  <img className='logo' src='/images/blog.png'/>
                  <div className='blogText'>
                    <Link to={`/article${post.id}`} id={post.id}>I am aricle#{post.id}</Link>
                    <p>{post.title}</p>
                  </div>
                </div>
              )
            })
          ) : (
            <div className='app-list'>
              <p>No post to show</p>
            </div>
          )
        }
        <Link to={"/article4"}>Non existing link</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Home);
