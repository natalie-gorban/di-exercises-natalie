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
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.body}</p>
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
