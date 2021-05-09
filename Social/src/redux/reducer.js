const initialState = {
  users: [],
  posts: [],
  comments: [],
  loading: true,
  errorMessage: '',
};

const GET_USER = 'GET_USER';
const GET_POST = 'GET_POST';
const UPDATE_POST = 'UPDATE_POST';
const GET_COMMENT = 'GET_COMMENT';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const LOADING = 'LOADING';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {...state, users: action.payload};
    case GET_POST:
      return {...state, posts: action.payload};
    case UPDATE_POST:
      return {...state, posts: [...state.posts, action.payload]};
    case GET_COMMENT:
      return {...state, comments: action.payload};
    case UPDATE_COMMENT:
      return {...state, comments: [...state.comments, action.payload]};
    case LOADING:
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

export default reducer;
