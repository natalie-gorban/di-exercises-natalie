// import React from 'react';

// class Post extends React.Component {
//   render() {
//     return (
//       <div className='container'>
//         <h3 className='app-header'>Contacts</h3>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt augue interdum velit euismod in pellentesque.</p>
//       </div>
//     )
//   }
//     render () {
//       const post = this.props.post? (
//         <div>
//           <h4>{this.props.Post.title}</h4>
//           <p>{this.props.Post.body}</p>
//         </div>
//       ) : (
//         <div>
//           <p>Loading post</p>
//         </div>
//       );
//       return (
//         <div>{Post}</div>
//       )
//   }

//   mapStateToProps(state, ownProps) {
//     let id = ownProps.match.params.Post.id
//     return {
//       Post: state.posts.find(Post => Post.id == id)
//     }
//   }


// }

// export default connect(mapStateToProps)(Post);


import React from 'react';

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
