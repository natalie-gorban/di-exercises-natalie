import React from 'react';
import { connect } from 'react-redux'
import { store } from '../store'
class Post extends React.Component {
  render () {
    console.log('props:', this.props)
    const post = this.props.post? (
      <div className='app-list'>
        <img className='logo' src='/images/blog.png'/>
        <div className='blogText'>
          <a href='/article{this.props.post_id}'>
            <span className='article-title'>I am aricle#1</span>
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    ) : (
      <div>
        <p>Loading post</p>
      </div>
    );
    return (
      <div>{post}</div>
    )

  }
}
export default Post;
