import { createStore } from 'redux'
import { reducer } from '../reducers'

const initialState = {
  posts: [
    {
      id: '1',
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: '2',
      title: 'Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Fermentum posuere urna nec tincidunt praesent semper feugiat. Facilisi cras fermentum odio eu feugiat.'
    },
    {
      id: '3',
      title: 'Amet cursus sit amet dictum sit amet. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Ut tristique et egestas quis ipsum suspendisse ultrices gravida. Arcu dictum varius duis at consectetur lorem donec. Natoque penatibus et magnis dis. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare.'
    },
  ]
}

export const store = createStore(reducer, initialState)
