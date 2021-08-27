import React from 'react';
// import BlogLogo from '../public/images/blog.png'


class Home extends React.Component {
  render() {
    return (
      <div className='container'>
            <h3 className='app-header'>Home</h3>
          <div className='app-list'>
            <img className='logo' src='/images/blog.png'/>
            <div className='blogText'>
              <a href='/article1'>
                <span class='article-title'>I am aricle#1</span>
              </a>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className='app-list'>
            <img className='logo' src='/images/blog.png'/>
            <div className='blogText'>
              <a href='/article2'>
                <span class='article-title'>I am aricle#1</span>
              </a>
              <p>Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Fermentum posuere urna nec tincidunt praesent semper feugiat. Facilisi cras fermentum odio eu feugiat. </p>
            </div>
          </div>
          <div className='app-list'>
            <img className='logo' src='/images/blog.png'/>
            <div className='blogText'>
              <a href='/article3'>
                <span class='article-title'>I am aricle#1</span>
              </a>
              <p>Amet cursus sit amet dictum sit amet. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Arcu dictum varius duis at consectetur lorem donec. Natoque penatibus et magnis dis. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. </p>
            </div>
          </div>
      </div>
    )
  }
}
export default Home;
