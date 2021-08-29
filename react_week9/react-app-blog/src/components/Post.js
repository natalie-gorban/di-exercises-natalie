import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../store'
class Post extends React.Component {
  render () {
    const posts = store.getState().posts
    const post = posts.find(element => element.id == this.props.id)
    const output = post ? (
      <div className='app-list'>
        <img className='logo' src='/images/blog.png'/>
        <div className='blogText'>
          <Link className='article-title' to={`/article${post.id}`}>I am aricle#{post.id}</Link>
          <p>{post.title}</p>
        </div>
      </div>
    ) : (
      <div>
        <p>Loading post</p>
      </div>
    );
    return output

  }
}

const mapStateToProps = (state, ownProps) => {
  const stateToReturn = {
    posts: state.posts,
    id: ownProps.match.params.post_id
  }
  return stateToReturn
}

export default connect(mapStateToProps)(Post);
