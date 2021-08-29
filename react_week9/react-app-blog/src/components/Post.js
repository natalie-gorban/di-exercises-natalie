import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../store'
import { deletePost } from '../actions'

const handleClick = (event) => {
  event.preventDefault();
  const id = event.target.dataset.id
  store.dispatch(deletePost(id))
}

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
        <input type='button' value='Delete post' data-id={post.id} onClick={handleClick}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    delete: (id) => dispatch(deletePost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
