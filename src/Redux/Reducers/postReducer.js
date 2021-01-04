const initialState = {
  loading: false,
  postData: [],
  error: null,
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case "POST_FETCH_START":
      state = {
        ...state,
        loading: true,
      };
      break;
    case "POST_FETCH_SUCCESS":
      state = {
        ...state,
        loading: false,
        postData: action.payload,
        error: null,
      };
      break;
    case "POST_FETCH_FAILURE":
      state = {
        ...state,
        loading: false,
        postData: [],
        error: action.payload,
      };
      break;
    default:
      return state;
  }
  return state;
};

const createPostInitialState = {
  loading: false,
  postData: [],
  error: null,
};
export const postCreationReducer = (state = createPostInitialState, action) => {
  switch (action.type) {
    case "POST_CREATION_START":
      state = {
        ...state,
        loading: true,
      };
      break;
    case "POST_CREATION_SUCCESS":
      const newPost = {
        ...action.postData,
        id: action.postId,
      };
      state = {
        ...state,
        loading: false,
        postData: state.postData.concat(newPost),
        error: null,
      };
      break;
    case "POST_CREATION_FAILURE":
      state = {
        ...state,
        loading: false,
        postData: [],
        error: action.payload,
      };
      break;
    default:
      return state;
  }
  return state;
};

const deletePostInitialState = {
  loading: false,
  postData: [],
  error: null,
};
export const postDeletionReducer = (state = deletePostInitialState, action) => {
  switch (action.type) {
    case "POST_DELETE_START":
      state = {
        ...state,
        loading: true,
      };
      break;
    case "POST_DELETE_SUCCESS":
      const newPost = {
        ...action.postData,
        id: action.postId,
      };
      state = {
        ...state,
        loading: false,
        postData: state.postData.concat(newPost),
        error: null,
      };
      break;
    case "POST_DELETE_FAILURE":
      state = {
        ...state,
        loading: false,
        postData: [],
        error: action.payload,
      };
      break;
    default:
      return state;
  }
  return state;
};
