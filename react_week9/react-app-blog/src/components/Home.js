import React from 'react';
import Post from './Post'
import {connect} from 'react-redux'
import { store } from '../store'
// import BlogLogo from '../public/images/blog.png'


class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        <h3 className='app-header'>Home</h3>
        {
          store.getState().map((post) => {
            return (
              <div className='app-list'>
                <img className='logo' src='/images/blog.png'/>
                <div className='blogText'>
                  <a href={`/article${post.id}`}>
                    <span className='article-title'>I am aricle#{post.id}</span>
                  </a>
                  <p>{post.title}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  post: state.post
})

export default connect(mapStateToProps)(Home);
