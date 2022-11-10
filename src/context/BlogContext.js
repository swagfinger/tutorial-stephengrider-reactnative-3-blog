import createDataContext from './createDataContext'; //generic context

//reducer
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `blog post #${state.length + 1}` }];
    default:
      return state;
  }
};

//functions
//addBlogPost needs 'dispatch' which it will receive from createDataContext
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: 'add_blogpost' });
  };
};

//function createDataContext() takes in reducer, functions, initialstate
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
